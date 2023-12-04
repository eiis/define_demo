import fs from 'fs';
import path from 'path';

interface PackageJson {
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  [key:string]:any
}

export function getViteVersion(root: string): string {
  const packageJsonPath = path.join(root, 'package.json');
  const packageJsonData = fs.readFileSync(packageJsonPath, 'utf-8');
  const packageJson: PackageJson = JSON.parse(packageJsonData);

  return packageJson.devDependencies?.vite || packageJson.dependencies?.vite || '';
}

