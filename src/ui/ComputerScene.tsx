import { createRoot, extend, useFrame, useThree } from '@react-three/fiber';
import { Component, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { useReducedMotion } from 'framer-motion';
import * as THREE from 'three';
import { loadComputerModel } from '../lib/computerModel';
import type { ThemeMode } from '../types/theme';

extend(THREE);

type ComputerSceneProps = {
  theme: ThemeMode;
  onSettled: () => void;
};

function ComputerScreen({ reduced, onReady }: { reduced: boolean; onReady: () => void }) {
  const pivotRef = useRef<THREE.Group>(null);
  const screensRef = useRef<THREE.Mesh[]>([]);
  const onReadyRef = useRef(onReady);
  const invalidate = useThree((state) => state.invalidate);

  onReadyRef.current = onReady;

  useEffect(() => {
    const pivot = pivotRef.current;
    let alive = true;
    let mounted: THREE.Object3D | null = null;

    loadComputerModel()
      .then((source) => {
        if (!alive || !pivot) {
          return;
        }

        const model = source.clone(true);
        const screens: THREE.Mesh[] = [];

        model.traverse((object) => {
          const mesh = object as THREE.Mesh;

          if (!mesh.isMesh) {
            return;
          }

          const sourceMaterial = mesh.material as THREE.MeshStandardMaterial;
          const material = sourceMaterial.clone();
          material.transparent = false;
          material.depthWrite = true;
          material.side = THREE.DoubleSide;
          material.toneMapped = false;
          material.opacity = 1;
          mesh.material = material;
          screens.push(mesh);
        });

        model.position.set(-0.016, -0.003, -0.306);
        screensRef.current = screens;
        pivot.add(model);
        mounted = model;
        invalidate();
        onReadyRef.current();
      })
      .catch(() => {
        if (alive) {
          onReadyRef.current();
        }
      });

    return () => {
      alive = false;

      if (pivot && mounted) {
        pivot.remove(mounted);
        mounted.traverse((object) => {
          const mesh = object as THREE.Mesh;

          if (mesh.isMesh) {
            const material = mesh.material as THREE.Material;
            material.dispose();
          }
        });
      }
    };
  }, [invalidate]);

  useFrame(({ clock }) => {
    const pivot = pivotRef.current;
    const screens = screensRef.current;

    if (!pivot || reduced || screens.length === 0) {
      return;
    }

    const time = clock.getElapsedTime();
    pivot.rotation.y = Math.sin(time * 0.35) * 0.28;
    pivot.position.y = 0.2 + Math.sin(time * 0.7) * 0.035;
  });

  return <group ref={pivotRef} position={[0.28, 0.2, 0]} scale={1.45} />;
}

function StillFrame() {
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    invalidate();
  }, [invalidate]);

  return null;
}

type SceneBoundaryProps = {
  children: ReactNode;
  onError: () => void;
};

type SceneBoundaryState = {
  failed: boolean;
};

class SceneBoundary extends Component<SceneBoundaryProps, SceneBoundaryState> {
  state: SceneBoundaryState = { failed: false };

  static getDerivedStateFromError(): SceneBoundaryState {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onError();
  }

  render() {
    if (this.state.failed) {
      return null;
    }

    return this.props.children;
  }
}

function SceneGraph({
  theme,
  reduced,
  onReady,
}: {
  theme: ThemeMode;
  reduced: boolean;
  onReady: () => void;
}) {
  const isLight = theme === 'light';

  return (
    <>
      <ambientLight intensity={isLight ? 1.35 : 0.85} />
      <directionalLight position={[2.4, 3.2, 4]} intensity={isLight ? 1.1 : 1.5} color="#f8fbff" />
      <pointLight position={[0.4, 0.2, 1.4]} intensity={isLight ? 4 : 9} distance={6} color="#67e8f9" />
      <ComputerScreen reduced={reduced} onReady={onReady} />
      {reduced && <StillFrame />}
    </>
  );
}

export function ComputerScene({ theme, onSettled }: ComputerSceneProps) {
  const shouldReduceMotion = useReducedMotion();
  const reduced = Boolean(shouldReduceMotion);
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<ReturnType<typeof createRoot> | null>(null);
  const themeRef = useRef(theme);
  const reducedRef = useRef(reduced);
  const onSettledRef = useRef(onSettled);

  themeRef.current = theme;
  reducedRef.current = reduced;
  onSettledRef.current = onSettled;

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;

    if (!host || !canvas) {
      return;
    }

    const root = createRoot(canvas);
    rootRef.current = root;
    let painted = false;

    const renderScene = () => {
      const rect = host.getBoundingClientRect();

      if (rect.width < 2 || rect.height < 2) {
        return;
      }

      root.configure({
        size: {
          width: rect.width,
          height: rect.height,
          top: rect.top,
          left: rect.left,
          updateStyle: false,
        },
        ...(painted
          ? {}
          : {
              dpr: [1, 1.5] as [number, number],
              frameloop: reducedRef.current ? ('demand' as const) : ('always' as const),
              gl: { alpha: true, antialias: true },
              camera: { fov: 30, position: [-0.05, 0.32, 5.4] as [number, number, number] },
              onCreated: (state: { camera: THREE.Camera; gl: THREE.WebGLRenderer }) => {
                state.camera.lookAt(0.28, 0.2, 0);
                state.gl.setClearColor(0x000000, 0);
              },
            }),
      });

      if (painted) {
        return;
      }

      painted = true;
      root.render(
        <SceneBoundary onError={() => onSettledRef.current()}>
          <SceneGraph
            theme={themeRef.current}
            reduced={reducedRef.current}
            onReady={() => onSettledRef.current()}
          />
        </SceneBoundary>,
      );
    };

    renderScene();
    const observer = new ResizeObserver(renderScene);
    observer.observe(host);

    return () => {
      observer.disconnect();
      const owned = root;
      queueMicrotask(() => {
        if (rootRef.current === owned) {
          owned.unmount();
          rootRef.current = null;
        }
      });
    };
  }, []);

  const didMountScene = useRef(false);

  useEffect(() => {
    if (!didMountScene.current) {
      didMountScene.current = true;
      return;
    }

    const host = hostRef.current;
    const root = rootRef.current;

    if (!host || !root) {
      return;
    }

    const rect = host.getBoundingClientRect();

    if (rect.width < 2 || rect.height < 2) {
      return;
    }

    root.configure({
      frameloop: reduced ? 'demand' : 'always',
      onCreated: (state) => {
        state.camera.lookAt(0.28, 0.2, 0);
        state.gl.setClearColor(0x000000, 0);
      },
      size: {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        left: rect.left,
        updateStyle: false,
      },
    });
    root.render(
      <SceneBoundary onError={onSettled}>
        <SceneGraph theme={theme} reduced={reduced} onReady={onSettled} />
      </SceneBoundary>,
    );
  }, [onSettled, reduced, theme]);

  return (
    <div ref={hostRef} className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="block h-full w-full" />
    </div>
  );
}
