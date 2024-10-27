import path from 'node:path';
import yaml from 'js-yaml';
import { readFileSync } from 'node:fs';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getAbsolutPath(filepath), 'utf-8');

const getParse = (filePath, file) => {
  const formatFile = path.extname(filePath).slice(1);

  if (formatFile === 'json') {
    return JSON.parse(file);
  }
  if (formatFile === 'yml' || formatFile === 'yaml') {
    return yaml.load(readFile(filePath));
  }
  return file;
};

export default getParse;
