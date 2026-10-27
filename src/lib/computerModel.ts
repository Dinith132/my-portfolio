import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import type { Group } from 'three';
import { assetPath } from '../data/profile';
import { downloadWithProgress, type DownloadProgress } from './downloadWithProgress';

const modelUrl = assetPath('models/computer.glb');

let modelPromise: Promise<Group> | null = null;
let latestProgress: DownloadProgress = 0;
const listeners = new Set<(progress: DownloadProgress) => void>();

function publish(progress: DownloadProgress) {
  latestProgress = progress;
  listeners.forEach((listener) => listener(progress));
}

export function subscribeComputerProgress(listener: (progress: DownloadProgress) => void) {
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
