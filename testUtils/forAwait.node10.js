'use strict';

module.exports.forAwaitUntil = async function forAwaitUntil(iterator, limit) {
  const items = [];
  for await (const item of iterator) {
    items.push(item);
    if (items.length >= limit) {
      break;
    }
  }
  return items;
}
