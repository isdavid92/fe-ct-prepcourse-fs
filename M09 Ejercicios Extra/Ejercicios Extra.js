/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrayPropiedades=Object.keys(objeto);
   var arrayValores=[];
   var nuevoArray=[];
   for (let i in objeto){
      arrayValores.push(objeto[i]);
   };
   for (var i=0 ; i<arrayPropiedades.length ; i++){
      nuevoArray.push([arrayPropiedades[i],arrayValores[i]]);
   };
   return nuevoArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var nuevoObjeto={};
   var dividido=string.split("").sort();
   dividido.forEach(element => {
      nuevoObjeto[element]=(nuevoObjeto[element] || 0)+1;
   });
   return nuevoObjeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var div=string.split("");
   var mayus=[];
   var minus=[];
   for (var i=0 ; i<div.length ; i++){
      if (div[i]==div[i].toUpperCase()){
         mayus.push(div[i]);
      }else{
         minus.push(div[i]);
      }
   };
   return (mayus.join("")+minus.join(""));
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var arregloPalabras=[""];
   var stringMirror="";
   var div=frase.split("");
   var esp=0;
   for (var i=0 ; i<div.length ; i++){
      if (div[i]!=" "){
         arregloPalabras[esp]+=div[i];
      }else{
         esp++;
         arregloPalabras[esp]="";
      }
   };
   for (var i=0 ; i<arregloPalabras.length ; i++){
      arregloPalabras[i]=arregloPalabras[i].split("").reverse().join("");
      stringMirror=stringMirror+arregloPalabras[i];
      if (i<arregloPalabras.length-1){
         stringMirror=stringMirror+" "
      }
   };
   return stringMirror;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var invertido=numero.toString().split("").reverse().join("");
   invertido=Number(invertido);
   if (numero==invertido){
      return "Es capicua"
   }else{
      return "No es capicua"
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevoString=[];
   var div=string.split("");
   for (var i=0 ; i<div.length ; i++){
      if(div[i]=="a"||div[i]=="b"||div[i]=="c"){
         continue;
      }else{
         nuevoString.push(div[i]);
      }
   };
   return nuevoString.join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   return (arrayOfStrings.sort(function (a,b){
      return a.length-b.length;
   }));
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var enComun=[];
   for (var i=0 ; i<array1.length ; i++){
      for (var i2=0 ; i2<array2.length ; i2++){
         if (array1[i]==array2[i2]){
            enComun.push(array1[i])
         }
      }
   };
   return enComun;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
