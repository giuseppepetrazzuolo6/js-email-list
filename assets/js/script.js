/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

//dichiaro una variabile per l'elemento html
const emailListEl = document.getElementById('email-list')
console.log(emailListEl);

//creo una variabile in cui inserire l'url dell'API
const randomEmailUrl = 'https://flynn.boolean.careers/exercises/api/random/mail'
console.log(randomEmailUrl);

//ora devo creare un ciclo for in cui inserire la chiamata api per far si che venga ripetuta 10 volte 
//se inserisco il for all'interno della chiamata api mi consentirebbe di generare 10 email ma sempre sulla singola chiamata
//quindi ottorrei 10 email, ma tutte uguali
//creo il ciclo for
for (let i = 0; i < 10; i++) {
    //eseguo la chiamata AJAX
    axios.get(randomEmailUrl)
        .then(response => {
            console.log(response.data);
        })

}


