const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
            <title>My site</title>
        </head>
        <body>
            <h1>Hello World</h1>
        </body>
    </html>
    `)
})

app.get('/puppies', (req, res) => {
    res.send(`<h1>My puppies</h1>`)
})

app.get('/kittens', (req, res) => {
    res.send(`<h1>My kittens</h1>`)
})

const PORT = 1337;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});