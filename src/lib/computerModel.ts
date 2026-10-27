import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Group } from 'three';
import { assetPath } from '../data/profile';
import { downloadWithProgress, type DownloadSnapshot } from './downloadWithProgress';

const modelUrl = assetPath('models/computer.glb');

let modelPromise: Promise<Group> | null = null;
let latestProgress: DownloadSnapshot = { percent: 0, loaded: 0, total: null };
const listeners = new Set<(progress: DownloadSnapshot) => void>();

function publish(progress: DownloadSnapshot) {
  latestProgress = progress;
  listeners.forEach((listener) => listener(progress));
}

export function subscribeComputerProgress(listener: (progress: DownloadSnapshot) => void) {
  listener(latestProgress);
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

export function loadComputerModel() {
  if (!modelPromise) {
    modelPromise = downloadWithProgress(modelUrl, publish).then(
      ({ buffer }) =>
        new Promise<Group>((resolve, reject) => {
          const loader = new GLTFLoader();
          loader.parse(
            buffer,
            '',
            (gltf) => resolve(gltf.scene),
            (error) => reject(error),
          );
        }),
    );
  }

  return modelPromise;
}
