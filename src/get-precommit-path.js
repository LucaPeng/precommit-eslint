import * as path from 'path';
import * as fs from 'fs';

function findGitDir() {
  const dirs = __dirname.split(path.sep);
  while (dirs.pop()) {
    const dir = dirs.join(path.sep);

    if (fs.existsSync(path.join(dir, '.git'))) {
      return path.join(dir, '.git');
    }
  }
  return undefined;
}

function getPrecommitPath() {
  const gitDir = findGitDir();
  if (gitDir) {
    return path.join(gitDir, 'hooks/pre-commit');
  }
  return undefined;
}

module.exports = getPrecommitPath;
