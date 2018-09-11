'use strict';

module.exports.awaitUntil = async function awaitUntil(iterator, limit) {
  const items = [];
  while (true) {
    const {value, done} = await iterator.next();
    if (done) break;
    items.push(value);
    if (items.length >= limit) {
      break;
    }
  };
  return items;
}
