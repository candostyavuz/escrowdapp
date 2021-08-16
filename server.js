const express = require('express');
const app = express();
const cors = require('cors');
const {PORT} = require('./config');

let containerHTML;

app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const {method, html} = req.body;
    if(method === "saveHTML"){
        containerHTML = html;
        res.send({ ack: "html instance has been saved"});
        return;
    }
    else if(method === "getHTML"){
        res.send({ html: containerHTML });
        return;
    }
});

app.listen(PORT,  () => {
    console.log(`Listening on port ${PORT}!`);
});