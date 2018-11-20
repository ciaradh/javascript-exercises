/**
 * Fib
 *
 * Write a function which print out the n-th entry in the fibonacci series.
 * The fibonacci series is an ordering of numbers where
 * each number is the sum of the preceeding two.
 * Example sequence: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 *
 * Examples:
 * fib(4) === 3
 * fib(15) === 610
 */

//OPTION 1
function fib(n) {
    //perché i primi due numeri non possono essere generati da un for
    //che somma due numeri
    var fibArray = [0,1];
  
    //GENERA SEQUENZA SUPERANDO N DI UN ELEMENTO
    //n+1 perché voglio che n sia compreso
    // i= 2 perché voglio partire a contare da dopo i primi numeri
    for(var i=2; i<n+1; i++) {
      fibArray.push(fibArray[i-2]+ fibArray[i-1])
    }
    return fibArray[n];
  }
  
  //OPTION 2 - RICORSIVA
  function fibRec(n) {
    //controlla se n<2 perché in caso ritorna automaticamente n
    //perché sei sui primi due valori che non hanno niente a cui essere   //sommati
  
    if (n<2)
      return n;
  
    //funzione ricorsiva
    //chiama se stessa per splittare numeri finché non si arriva a un     //numero singolo
    //
    return fib(n-1) + fib(n-2);
  }

module.exports = fib;
