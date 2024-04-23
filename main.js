// Crea due variabili, una che contiene il numero totale dei gatti e una che contiene il numero dei gatti in fila. Scrivi quindi un programma che calcoli: 
// Il numero di file risultanti 
// il numero di gatti mancanti per completare una nuova fila
// quanti gatti rimangono fuori

// In seguito, stampa in console la frase “Ci sono X file di gatti e ne mancano Y per una nuova fila, con un avanzo di Z”



let totaleGatti = 56;
let gattiInfila = 6;
let remainder = totaleGatti % gattiInfila;
let file = (totaleGatti - remainder) / gattiInfila;
let gattiMancanti =  gattiInfila - remainder;


console.log(`Ci sono ${file} file di gatti e ne mancano ${gattiMancanti} per una nuova fila, con un avanzo di ${remainder}`);

