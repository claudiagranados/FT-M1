'use strict';

function BinarioADecimal(num) {
   let suma = 0;
   let array = num.split("").reverse()

   for (let i = 0; i < num.length; i++) {
      suma = suma + array[i] * 2 ** i;
   }
   return suma;

}

function DecimalABinario(num) {
   let binario = [];
   while (num >1) {
      let resto = Math.floor(num % 2);
      binario.unshift(resto);
      num = Math.floor(num /2);
   }
   binario.unshift(num);

   return binario.join("");

}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
