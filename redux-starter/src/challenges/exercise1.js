import {
  pipe,
} from 'lodash/fp';

const input = {
  tag: "JAVASCRIPT"
};
const output = "(javascript)";

const getTagValue = (obj) => obj.tag;

const wrapInParentheses = (str) => `(${str})`;

const toLowerCase = (str) => str.toLowerCase();


const transform = pipe(getTagValue, wrapInParentheses, toLowerCase);

const result = transform(input);

console.log(result);