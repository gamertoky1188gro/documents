const http = require('http');
const fs = require('fs')
const ports = [
    {
        port: 2024
    }
];

const serv = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.end('')
        } else {
            res.write(data);
            res.end(data)
        }
    })
})

serv.listen(ports[0].port, () => {
    if (ports[0].port === 2024) {
        console.log(`the server runs on port ${ports[0].port}`);
    } else {
        console.log('the server is running on another port. I suggest telling this to Jahin.');
    }
})
