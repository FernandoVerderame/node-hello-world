require('dotenv').config();

// Importo il modulo nativo http
const http = require("http");

// Definisco le variabili port, host e start
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const start = process.env.START || "Hello Wolrd!";

// Aggiungo un array di frasi motivazionali
const quotes = [
    { text: "La vita è ciò che accade mentre siamo impegnati a fare altri piani.", author: "John Lennon" },
    { text: "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.", author: "Robert Collier" },
    { text: "Il miglior modo per prevedere il futuro è crearlo.", author: "Peter Drucker" },
    { text: "Non è mai troppo tardi per essere ciò che avresti potuto essere.", author: "George Eliot" },
    { text: "La felicità non è qualcosa di fatto. Viene dalle tue azioni.", author: "Dalai Lama" },
    { text: "Sii il cambiamento che vuoi vedere nel mondo.", author: "Mahatma Gandhi" },
    { text: "Non puoi mai attraversare l'oceano fino a quando non hai il coraggio di perdere di vista la riva.", author: "Cristoforo Colombo" },
    { text: "La vita è davvero semplice, ma noi insistiamo nel renderla complicata.", author: "Confucio" }
];

// Genero una frase casuale
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

http
    .createServer(function (req, res) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        const randomQuote = getRandomQuote();

        res.end(`
        <h1>${start}</h1>
        <h1>${randomQuote.text}</h1>
        <address>${randomQuote.author}</address>
        `);
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`;
        console.log(`Server avviato su ${serverUrl}`);
    });