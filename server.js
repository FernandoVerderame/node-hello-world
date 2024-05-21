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

// Creo il server
const server = http.createServer(function (req, res) {
    console.log(`${req.method} | ${req.url} effettuata`);

    // Validazione favicon
    if (req.url === "/favicon.ico") {
        res.writeHead(404);
        res.end("<h1>Not Found</h1>");
        return;
    }

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    const randomQuote = getRandomQuote();

    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MyServer</title>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            </head>
        </head>
        <body class="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
            <h2>${start}</h2>
            <h1>${randomQuote.text}</h1>
            <address>${randomQuote.author}</address>
        </body>
        </html>
        `);
})

// Avvio il server
server.listen(port, host, () => {
    const serverUrl = `http://${host}:${port}`;
    console.log(`Server avviato su ${serverUrl}`);
});