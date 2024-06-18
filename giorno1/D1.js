/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
/* 
indica il tipo di struttura delle variabili, che può essere: o di tipo stringa( cioè che indica i caratteri come una frase, una parola ecc) o di tipo numerico ( che indica appunto i numeri)
o di tipo booleano( che indica due valori TRUE o FALSE). Possiamo anche trovare due tipi di variabili che indicano NULL and UNDEFINED rispettivamente una variabile intenzionalmente senza valore
e una variabile senza valora che acquisirà valore in un secondo momento.
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myNamename ="alessandro";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number1 = 12;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

/*oppure*/
console.log(sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//

//
let x;
x=12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'varchetta';
console.log(myName)
/* non riscrivere let perchè: assegnare valore diverso ad una variabile già creata significa invocarla non ridichiararla es. let myname=varchetta NO ma myName = varchetta YES*/
const myConst = 'pippo';
console.log(myConst)
/*const myConst = 'Paperino'; errore*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let mynum1=4;
let sottrazione = x - mynum1;
console.log(sottrazione);


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = 'John';
let name2 = 'john';
const verify = name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
console.log(verify)
  name1 = name1.toLowerCase();
  name2 = name2.toLowerCase();
  const verify2 = name1 !== name2 ? 'name1 è diverso da name2' : 'name1 è identico a name2';
