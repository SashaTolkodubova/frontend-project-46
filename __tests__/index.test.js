import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

const testList = [
  'yaml',
  'json',
];

const resultStylish = readFile('result-stylish.txt');
const resultPlain = readFile('result-plain.txt');
const resultJson = readFile('result-json.txt');

describe('gendiff', () => {
  test.each(testList)('gendiff %s', (format) => {
    const file1 = getFixturePath(`file1.${format}`);
    const file2 = getFixturePath(`file2.${format}`);
    expect(genDiff(file1, file2)).toEqual(resultStylish);
    expect(genDiff(file1, file2, 'stylish')).toEqual(resultStylish);
    expect(genDiff(file1, file2, 'plain')).toEqual(resultPlain);
    expect(genDiff(file1, file2, 'json')).toEqual(resultJson);
  });
});
