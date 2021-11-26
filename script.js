"use strict";



//эта  функция при помощи цикла создаст новый обьект перебирая старые свойства что уже были в обьекте
function copy(mainObj) {  // аргумент  mainObj

    let objCopy = {};

    let key;// перебирающая конструкция  переменная  key  вне

    for (key in mainObj) {// есть ключи внутри обьекта  mainObj 

        objCopy[key] = mainObj[key];// делаем копию из нашего главного обьекта пройдемся по старому mainObj  скопируем  все  свойства  и  поместим  в  нашу  копию objCopy которая изначально была пустым обьектом

    }


    return objCopy;// возвращаем  нашу  копию  наружу  чтобы  как  нибудь  взаимодействовать
}



const numbers = {// это обьект

    a: 2,
    b: 5,
    c: {// вложенный  обьект
        x: 7,
        y: 4


    }

};

const newNumbers = copy(numbers);// воспользуемся функцией copy она  примет  в  себя  обьект  numbers и вернет нам новый  обьект  который  уже  будет  копией


newNumbers.a = 10;// обращаемся  к  свойству а

newNumbers.c.x =10;

console.log(newNumbers);
console.log(numbers);

//[Running] node "w:\КУРС ДЖАВА СКРИПТ\1\19 PEREDACHA_DANNIX_PO_SSILKE_ILI_ZNACHENIJU\tempCodeRunnerFile.js"
//{ a: 10, b: 5, c: { x: 10, y: 4 } }
//{ a: 2, b: 5, c: { x: 10, y: 4 } }


