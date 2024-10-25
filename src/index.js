import { readFileSync } from 'node:fs';
import path from 'path';
// import fs from 'fs';
import _ from 'lodash';
// import { Console } from 'node:console';

const getAbsolutPath = (filepath) => path.resolve(process.cwd(), '__fixtures__', filepath);
const readFile = (filepath) => readFileSync(getAbsolutPath(filepath), 'utf-8');
// const getFormat = (filename) => path.extname(filename);

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

const genD = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const dataParse1 = JSON.parse(data1);
  const dataParse2 = JSON.parse(data2);
  return genDiff(dataParse1, dataParse2);
};
export default genD;
