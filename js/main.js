// Snack 1
/* Creare un array di oggetti: 
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */


$(document).ready(function(){
    // CREO IL MIO ARRAY DI OGGETTI CON LE VARIE BICI DA CORSA
 /*    const bici = [
        {
            nome: "low",
            peso: 20,
        },
        {
            nome: "medium",
            peso: 15,
        },
        {
            nome: "fast",
            peso: 10,
        }
    ];

    //ASSEGNO UNA VARIABILE AL MIO PARAMETRO DI PARAGONE PER VERIFICARE IL PESO DELLE BICI
    let biciLeggera = bici[0];

    for(let i = 0; i < bici.length; i++){
        //VADO A VERIFICARE QUALE BICI è PIù LEGGERA
        if(bici[i].peso < biciLeggera.peso){
            //DICHIARO biciLeggere = bici[i] per confrontare tutte le bici nel caso in cui bici[i] risulta minore di biciLeggera, biciLeggera[i] aumenterà il suo indice [i] di 1 fino a confrontarla con tutte le bici 
            biciLeggera = bici[i];
        }

    }

    const message = `La bici più leggere è la bici: ${biciLeggera.nome}`;

    console.log(message); */

    // Snack 2
   /*  Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome,    punti fatti, falli subiti. 
    Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
    Generare numeri random al posto degli 0 nelle proprietà:
    Punti fatti e falli subiti
    Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

    //CREO ARRAY DI OGGI CONTENENTE DATI DI SQUADRE DI CALCIO 
/* 
    const squadre = [
        {
            nome: "Caivanese",
            puntiFatti: 0,
            falliSubiti: 0,
        },
        {
            nome: "Carditese",
            puntiFatti: 0,
            falliSubiti: 0,
        },
        {
            nome: "frattese",
            puntiFatti: 0,
            falliSubiti: 0,
        },
    ];
    
    const squadraNuova =[];
    for(let i = 0; i < squadre.length; i++){
        squadre[i].puntiFatti = numeriRandom(0, 70);
        squadre[i].falliSubiti = numeriRandom(0, 25);
        //CON LA DESTRUTTURIZZAZIONE VADO A INSERIRE GLI ELEMENTI NOME E FALLI SUBITI NELL ARRAY VUOTO CREATO
        const [nome, falliSubiti] = squadre;
        squadraNuova.push({nome, falliSubiti});
        
    }
    
    console.log(squadre);
    console.log(squadraNuova);
    

     */
    /* 
    * UTILITIES FUNCTION
    */

   /* 
    function numeriRandom(min, max){
        return Math.floor(Math.random() * (max - min +1) + min);
    } */



   /*  jsnack 3
    Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
    La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
    inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter
    */
    
        
    /*     const nomi = ["alfonso", "nicola", "peppe", "pasquale", "francesco", "giacomo"];
    
    console.log(nomi);
    let a = parseInt(prompt("inserisci un numero"));

    while(isNaN(a) || a > 5){
        a = parseInt(prompt("Devi inserire un numero tra 0 e 5"));
    }

    let b = parseInt(prompt("inserisci un altro numero"));
    while(isNaN(a) || a > b || b > 5){
        b = parseInt(prompt("Devi inserire un numero tra 0 e 5 piu grande del numero a"));
    }

    const newArray = array(nomi, a, b);
    console.log(newArray); */
    
    /* 
    * UTILITIES FUNCTION PER ESERCITARMI PROVO CON FILTER
    */
    //FUNZIONE CON FILTER
    /*     function array(arr, num1, num2){

        let newArray = arr.filter( (element, index) => {
            return num1 <= index && num2 >= index;
        })

        return newArray
    } */

 /*    jsnack 4
    Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
    Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà) */

    const abbigliamento = [
        {
            nomeModello: "camicia mezze maniche",
            modello: "camicie",
            colore: "blu",
        },
        {
            nomeModello: "camicia mezze maniche",
            modello: "camicie",
            colore: "blu",
        },
        {
            nomeModello: "camicia mezze maniche",
            modello: "camicie",
            colore: "blu",
        },
        {
            nomeModello: "camicia mezze maniche",
            modello: "camicie",
            colore: "blu",
        },
    ];
    
    abbigliamento.forEach((element) =>{
        element.prezzo = genRandom(10, 50);
    })
 
    console.log(abbigliamento);


    /* 
    * UTILITIES FUNCTION PER ESERCITARMI PROVO CON FILTER
    */
    //FUNZIONE CON FOREACH
  /*   function array(arr, num1, num2){
    } */
    
    function genRandom(min, max){
        return Math.floor((Math.random()* max - min + 1 ) + min);
    }






    //end doc ready
})