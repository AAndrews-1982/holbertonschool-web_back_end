export default function cleanSet(set, startString) {
  if (typeof startString !== 'string') {
    return '';
  }

  const filteredValues = [...set].filter(value => typeof value === 'string' && value.startsWith(startString));
  const resultString = filteredValues.join('-');
  return resultString;
}
