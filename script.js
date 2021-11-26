"use strict";

const obj = {
a:5,
b:1
};

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

// [Running] node "w:\КУРС ДЖАВА СКРИПТ\1\19 PEREDACHA_DANNIX_PO_SSILKE_ILI_ZNACHENIJU\tempCodeRunnerFile.js"
// { a: 10, b: 1 }
// { a: 10, b: 1 }