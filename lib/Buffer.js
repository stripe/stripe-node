'use strict';
// // @ts-ignore
// class Buffer {
//   str: string | number[] | number;
//   encoding: string;
//   constructor(str: string | number[] | number, encoding: string) {
//     this.str = str;
//     this.encoding = encoding;
//   }
//   // static from(str: string | number[] | number, encoding: string) {
//   //   return new Buffer(subject, encoding);
//   // }
//   static from(value: string | object, encoding: string) : Buffer {
//     if (typeof value === 'string')
//       return fromString(value, encoding);
//     if (typeof value === 'object' && value !== null) {
//       if (isAnyArrayBuffer(value))
//         return fromArrayBuffer(value, encodingOrOffset, length);
//       const valueOf = value.valueOf && value.valueOf();
//       if (valueOf != null &&
//           valueOf !== value &&
//           (typeof valueOf === 'string' || typeof valueOf === 'object')) {
//         return Buffer.from(valueOf, encoding);
//       }
//       const b = fromObject(value);
//       if (b)
//         return b;
//       if (typeof value[SymbolToPrimitive] === 'function') {
//         const primitive = value[SymbolToPrimitive]('string');
//         if (typeof primitive === 'string') {
//           return fromString(primitive, encodingOrOffset);
//         }
//       }
//     }
//   }
//   static alloc(size, fill encoding) {
//   }
//   static isBuffer(obj) {
//     return obj instanceof Buffer;
//   }
//   static concat(list, totalLength) {
//   }
// }
