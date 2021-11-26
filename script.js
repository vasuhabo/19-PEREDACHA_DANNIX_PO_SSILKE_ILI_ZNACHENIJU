"use strict";

const numbers = {// это обьект

    a: 2,
    b: 5,
    c: {// вложенный  обьект
        x: 7,
        y: 4

    }
    };

const add = {
    d : 17,
    e : 20
};

console.log(Object.assign(numbers, add));

///[Running] node "w:\КУРС ДЖАВА СКРИПТ\1\19 PEREDACHA_DANNIX_PO_SSILKE_ILI_ZNACHENIJU\tempCodeRunnerFile.js"
//{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }






