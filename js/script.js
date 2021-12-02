Vue.config.devtools = true;

// // Consegna:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue (
    {
        el: '#root',
        data: {
            image: 'https://miro.medium.com/max/1200/1*IUgOmASGaiBFrXjMB55bSQ.jpeg',
            message: 'Sono Evan You e questo messaggio viene da Vue',
        }
    }
);o