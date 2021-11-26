"use strict";

const old_array = ['a','b','c'];

const neo_array = old_array.slice();

neo_array[1] = 'hfghgfkjkhfk';

console.log (neo_array);

console.log(old_array);


///[Running] node "w:\КУРС ДЖАВА СКРИПТ\1\19 PEREDACHA_DANNIX_PO_SSILKE_ILI_ZNACHENIJU\tempCodeRunnerFile.js"
///[ 'a', 'hfghgfkjkhfk', 'c' ]
//[ 'a', 'b', 'c' ]