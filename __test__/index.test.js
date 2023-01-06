import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
describe('stylish', () => {
  const result = fs.readFileSync(getFixturePath('result.stylish.txt'), 'utf8');
  test('compare .ymls', () => expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'))).toBe(result));
  test('compare .json', () => expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toBe(result));
});
describe('plain', () => {
  const result = fs.readFileSync(getFixturePath('result.plain.txt'), 'utf8');
  test('compare .ymls', () => expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'plain')).toBe(result));
  test('compare .json', () => expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toBe(result));
});

describe('json', () => {
  const result = fs.readFileSync(getFixturePath('result.json.txt'), 'utf8');
  test('compare .ymls', () => expect(genDiff(getFixturePath('file1.yaml'), getFixturePath('file2.yaml'), 'json')).toBe(result));
  test('compare .json', () => expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'json')).toBe(result));
});
