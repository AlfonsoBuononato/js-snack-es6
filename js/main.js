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
    


    /* 
    * UTILITIES FUNCTION
    */

    function numeriRandom(min, max){
        return Math.floor(Math.random() * (max - min +1) + min);
    }


    //end doc ready
})