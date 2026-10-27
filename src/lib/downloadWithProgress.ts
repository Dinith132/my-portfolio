export type DownloadSnapshot = {
  percent: number | null;
  loaded: number;
  total: number | null;
};

export function downloadWithProgress(
  url: string,
  onProgress: (snapshot: DownloadSnapshot) => void,
): Promise<{ buffer: ArrayBuffer; contentType: string }> {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'arraybuffer';

    request.onprogress = (event) => {
      const total = event.lengthComputable && event.total > 0 ? event.total : null;

      onProgress({
        percent: total ? Math.min(100, Math.round((event.loaded / total) * 100)) : null,
        loaded: event.loaded,
        total,
      });
    };

    request.onerror = () => {
      reject(new Error(`Could not download ${url}`));
    };

    request.onload = () => {
      if (request.status < 200 || request.status >= 300) {
        reject(new Error(`Could not download ${url}`));
        return;
      }

      const buffer = request.response as ArrayBuffer;

      onProgress({
        percent: 100,
        loaded: buffer.byteLength,
        total: buffer.byteLength,
      });

      resolve({
        buffer,
        contentType: request.getResponseHeader('content-type') ?? '',
      });
    };

    request.send();
  });
}
