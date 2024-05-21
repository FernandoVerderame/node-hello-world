require('dotenv').config();

// Importo il modulo nativo http
const http = require("http");

// Definisco le variabili port, host e start
const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";
const start = process.env.START || "Hello Wolrd!";

http
    .createServer(function (req, res) {
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(`<h1>${start}</h1>`);
    })
    .listen(port, host, () => {
        const serverUrl = `http://${host}:${port}`;
        console.log(`Server avviato su ${serverUrl}`);
    });