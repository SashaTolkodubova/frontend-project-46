import { readFileSync } from 'node:fs';
import path from 'path';
import _ from 'lodash';
import getParse from './parsers.js';
// import fs from 'fs';
// import { Console } from 'node:console';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getAbsolutPath(filepath), 'utf-8');
// const getFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const difference = sortedKeys.map((key) => {
    if (!Object.hasOwn(data1, key)) {
      return `+ ${key}: ${data2[key]}`;
    } if (!Object.hasOwn(data2, key)) {
      return `- ${key}: ${data1[key]}`;
    } if (data1[key] !== data2[key]) {
      return `- ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `  ${key}: ${data1[key]}`;
  });
  const result = `{
  ${difference.join('\n  ')}
}
`;
  return result;
};

export default (filepath1, filepath2) => {
  const getParsedData1 = getParse(filepath1, readFile(filepath1));
  const getParsedData2 = getParse(filepath2, readFile(filepath2));
  return genDiff(getParsedData1, getParsedData2);
};
