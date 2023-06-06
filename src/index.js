import { readFileSync } from 'node:fs';
import _ from 'lodash';
import { Console } from 'node:console';

  const genDiff = (data1, data2) => {
    const keys = _.union(_.keys(data1), _.keys(data2));
    const sortedKeys = _.sortBy(keys);
    const difference = sortedKeys.map((key) => {
      if (!Object.hasOwn(data1, key)) {
        return `+ ${key}: ${data2[key]}`;
      } else if (!Object.hasOwn(data2, key)) {
        return `- ${key}: ${data1[key]}`;
      } else if (data1[key] !== data2[key]) {
        return `- ${key}: ${data1[key]}\n+ ${key}: ${data2[key]}`;
      } else {
        return `  ${key}: ${data1[key]}`
      }
    })
    console.log(difference.join('\n'));
    return difference.join('\n');
  }

export default (filepath1, filepath2) => {

const data1 = readFileSync(filepath1, 'utf-8');
const data2 = readFileSync(filepath2, 'utf-8');

const dataParse1 = JSON.parse(data1);
const dataParse2 = JSON.parse(data2);
//console.log(dataParse1, dataParse2)
genDiff(dataParse1, dataParse2);

} 
