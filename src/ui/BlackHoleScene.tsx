import { useEffect, useRef } from 'react';
import type { ThemeMode } from '../types/theme';

type BlackHoleSceneProps = {
  theme: ThemeMode;
};

type Star = {
  angle: number;
  distance: number;
  size: number;
  speed: number;
  depth: number;
};

type Shard = {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
};

const stars: Star[] = Array.from({ length: 190 }, (_, index) => {
  const seed = index + 1;

  return {
    angle: (seed * 2.399963) % (Math.PI * 2),
    distance: 0.12 + ((seed * 37) % 100) / 100,
    size: 0.7 + ((seed * 19) % 42) / 22,
    speed: 0.05 + ((seed * 11) % 70) / 640,
    depth: 0.35 + ((seed * 17) % 80) / 100,
  };
});

const shards: Shard[] = Array.from({ length: 24 }, (_, index) => {
  const seed = index + 3;

  return {
    x: ((seed * 83) % 100) / 100,
    y: ((seed * 47) % 100) / 100,
    width: 90 + ((seed * 53) % 260),
    height: 14 + ((seed * 23) % 72),
    speed: 0.018 + ((seed * 7) % 34) / 1000,
    opacity: 0.08 + ((seed * 13) % 22) / 100,
  };
});

function drawEllipseRing(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  radiusX: number,
  radiusY: number,
  rotation: number,
  color: string,
  width: number,
  alpha: number,
) {
  context.save();
  context.globalAlpha = alpha;
  context.strokeStyle = color;
  context.lineWidth = width;
  context.beginPath();
  context.ellipse(x, y, radiusX, radiusY, rotation, 0, Math.PI * 2);
  context.stroke();
  context.restore();
}

export function BlackHoleScene({ theme }: BlackHoleSceneProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');

    if (!context) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let animationId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;

    const palette =
      theme === 'light'
        ? {
            bg: '#f8fafc',
            paper: 'rgba(255, 255, 255, 0.84)',
            ink: 'rgba(12, 18, 16, 0.72)',
            star: 'rgba(20, 28, 25, 0.42)',
            glow: 'rgba(34, 197, 94, 0.26)',
            fire: 'rgba(245, 158, 11, 0.82)',
            ring: 'rgba(15, 118, 110, 0.5)',
            blue: 'rgba(56, 189, 248, 0.45)',
          }
        : {
            bg: '#030706',
            paper: 'rgba(6, 17, 15, 0.72)',
            ink: 'rgba(241, 245, 249, 0.76)',
            star: 'rgba(226, 232, 240, 0.54)',
            glow: 'rgba(45, 212, 191, 0.34)',
            fire: 'rgba(251, 191, 36, 0.88)',
            ring: 'rgba(94, 234, 212, 0.56)',
            blue: 'rgba(125, 211, 252, 0.5)',
          };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = reduceMotion.matches ? 0 : time * 0.001;
      const centerX = width * 0.62;
      const centerY = height * 0.47;
      const radius = Math.min(width, height) * 0.18;

      context.clearRect(0, 0, width, height);
      context.fillStyle = palette.bg;
      context.fillRect(0, 0, width, height);

      const background = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.3,
        centerX,
        centerY,
        width * 0.75,
      );
      background.addColorStop(0, theme === 'light' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.1)');
      background.addColorStop(0.28, palette.glow);
      background.addColorStop(0.68, palette.paper);
      background.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = background;
      context.fillRect(0, 0, width, height);

      shards.forEach((shard, index) => {
        const drift = ((shard.x * width + t * shard.speed * width * 8) % (width + 420)) - 220;
        const y = shard.y * height + Math.sin(t * 0.9 + index) * 16;

        context.save();
        context.translate(drift, y);
        context.rotate(-0.32 + Math.sin(t * 0.34 + index) * 0.08);
        context.globalAlpha = shard.opacity;
        context.fillStyle = palette.ink;
        context.fillRect(-shard.width / 2, -shard.height / 2, shard.width, shard.height);
        context.restore();
      });

      stars.forEach((star) => {
        const spin = star.angle + t * star.speed;
        const wobble = Math.sin(t * 0.7 + star.angle * 3) * 0.045;
        const orbitalDistance = radius * 0.7 + star.distance * Math.min(width, height) * 0.72;
        const x = centerX + Math.cos(spin + wobble) * orbitalDistance;
        const y = centerY + Math.sin(spin * 0.78) * orbitalDistance * 0.58;

        context.globalAlpha = star.depth;
        context.fillStyle = palette.star;
        context.beginPath();
        context.arc(x, y, star.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalCompositeOperation = 'screen';
      drawEllipseRing(
        context,
        centerX,
        centerY,
        radius * 2.45,
        radius * 0.72,
        -0.27 + Math.sin(t * 0.38) * 0.035,
        palette.fire,
        18,
        0.48,
      );
      drawEllipseRing(
        context,
        centerX,
        centerY,
        radius * 3.05,
        radius * 0.98,
        -0.27 + Math.cos(t * 0.3) * 0.03,
        palette.blue,
        7,
        0.35,
      );
      drawEllipseRing(
        context,
        centerX,
        centerY,
        radius * 1.72,
        radius * 0.42,
        -0.27 + t * 0.08,
        palette.ring,
        5,
        0.7,
      );
      context.globalCompositeOperation = 'source-over';

      const glow = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.4,
        centerX,
        centerY,
        radius * 2.25,
      );
      glow.addColorStop(0, 'rgba(0,0,0,0.98)');
      glow.addColorStop(0.24, 'rgba(0,0,0,0.94)');
      glow.addColorStop(0.35, theme === 'light' ? 'rgba(250,250,246,0.06)' : 'rgba(3,7,6,0.12)');
      glow.addColorStop(0.78, 'rgba(0,0,0,0)');
      context.fillStyle = glow;
      context.beginPath();
      context.arc(centerX, centerY, radius * 2.15, 0, Math.PI * 2);
      context.fill();

      const eventHorizon = context.createRadialGradient(
        centerX,
        centerY,
        radius * 0.12,
        centerX,
        centerY,
        radius * 1.02,
      );
      eventHorizon.addColorStop(0, '#000000');
      eventHorizon.addColorStop(0.62, '#010101');
      eventHorizon.addColorStop(0.82, theme === 'light' ? 'rgba(255,255,255,0.16)' : 'rgba(45,212,191,0.16)');
      eventHorizon.addColorStop(1, 'rgba(0,0,0,0)');
      context.fillStyle = eventHorizon;
      context.beginPath();
      context.arc(centerX, centerY, radius * 1.18, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.translate(centerX, centerY);
      context.rotate(t * 0.16);
      for (let index = 0; index < 4; index += 1) {
        drawEllipseRing(
          context,
          0,
          0,
          radius * (1.5 + index * 0.48),
          radius * (0.44 + index * 0.1),
          index * 0.34,
          index % 2 === 0 ? palette.fire : palette.ring,
          Math.max(2, 7 - index),
          0.28,
        );
      }
      context.restore();

      const vignette = context.createRadialGradient(
        width * 0.5,
        height * 0.5,
        width * 0.18,
        width * 0.5,
        height * 0.5,
        width * 0.78,
      );
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, theme === 'light' ? 'rgba(248,250,252,0.42)' : 'rgba(0,0,0,0.62)');
      context.fillStyle = vignette;
      context.fillRect(0, 0, width, height);

      frame += 1;

      if (!reduceMotion.matches || frame === 1) {
        animationId = requestAnimationFrame(draw);
      }
    };

    resize();
    draw(0);

    if (!reduceMotion.matches) {
      animationId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
