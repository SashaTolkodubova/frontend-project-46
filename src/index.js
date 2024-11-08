import { readFileSync } from 'node:fs';
import path from 'path';
// import _ from 'lodash';
// import fs from 'fs';
import getParse from './parsers.js';
import getDifferenceTree from './buildTree.js';
import formatter from './formatters/index.js';
// import { Console } from 'node:console';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getAbsolutPath(filepath), 'utf-8');

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const getParsedData1 = getParse(filepath1, readFile(filepath1));
  const getParsedData2 = getParse(filepath2, readFile(filepath2));
  return formatter(getDifferenceTree(getParsedData1, getParsedData2), format);
};
export default genDiff;
