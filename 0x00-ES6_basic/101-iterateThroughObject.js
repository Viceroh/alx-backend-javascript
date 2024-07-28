export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const item of reportWithIterator) {
    if (item === reportWithIterator[reportWithIterator.length - 1]) {
      str += item;
    } else {
      str += `${item} | `;
    }
  }
  return str;
}
