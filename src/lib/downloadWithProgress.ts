export type DownloadProgress = number | null;

export function downloadWithProgress(
  url: string,
  onProgress: (progress: DownloadProgress) => void,
): Promise<{ buffer: ArrayBuffer; contentType: string }> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'arraybuffer';

    request.onprogress = (event) => {
      if (!event.lengthComputable || event.total <= 0) {
        onProgress(null);
        return;
      }

      onProgress(Math.min(100, Math.round((event.loaded / event.total) * 100)));
    };

    request.onerror = () => {
      reject(new Error(`Could not download ${url}`));
    };

    request.onload = () => {
      if (request.status < 200 || request.status >= 300) {
        reject(new Error(`Could not download ${url}`));
        return;
      }

      onProgress(100);
      resolve({
        buffer: request.response as ArrayBuffer,
        contentType: request.getResponseHeader('content-type') ?? '',
      });
    };

    request.send();
  });
}
