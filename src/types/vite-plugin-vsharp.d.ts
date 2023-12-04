// vsharp.d.ts
declare module 'vite-plugin-vsharp' {
  export interface VSharpOptions {
    scale?: number;
    width?: number;
    height?: number;
    includePublic: string[];
    excludePublic: string[];
    exclude: string[];
    '.jpg': {
      quality: number;
    };
    '.jpeg': {
      quality: number;
    };
    '.png': {
      quality: number;
      palette: boolean;
    };
    '.webp': {
      lossless: boolean;
    };
    preserveMetadata: {
      orientation: boolean;
      icc: boolean;
      exif: boolean;
    };
  }

  function vsharp(opts?: VSharpOptions): {
    name: string;
    configResolved(res: any): void;
    writeBundle(op: any, bundle: any): void;
  };

  export default vsharp;
}
