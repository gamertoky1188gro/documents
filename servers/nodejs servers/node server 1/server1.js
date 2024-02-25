const tokyHttp = require('http');
const fs = require('fs');
const { ports } = require('./ports_and_more'); // Importing `ports` as a named import

function server() {
    const server = tokyHttp.createServer(function server1(req, res) {

        console.log(`address: ${req.socket.address}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`remoteAddress: ${req.socket.remoteAddress}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`remoteFamily: ${req.socket.remoteFamily}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`remotePort: ${req.socket.remotePort}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`localAddress: ${req.socket.localAddress}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`_construct: ${req.socket._construct}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`_writev: ${req.socket._writev}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`Request Time: ${new Date()}`);
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`User Agent: ${req.headers['user-agent']}`);

        const serverClintLog = `address: ${req.socket.address}\n remoteAddress: ${req.socket.remoteAddress}\n remoteFamily: ${req.socket.remoteFamily}\n remotePort: ${req.socket.remotePort}\n localAddress: ${req.socket.localAddress}\n _construct: ${req.socket._construct}\n _writev: ${req.socket._writev}\n Request Time: ${new Date()}\n User Agent: ${req.headers['user-agent']}`;

        fs.writeFileSync('server_clint_log.txt', serverClintLog)

    fs.readFile('yo.html', function example(err, data) {
            if (err) {
                console.error(`Error reading file: ${err}`);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        });
    });

    server.listen(ports[0].port1);

    server.on('listening', () => {
        console.log(`The server is listening on port ${ports[0].port1}`);
    });

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            console.log(`Port ${ports[0].port1} is already in use`);
        } else {
            console.error(`An error occurred: ${error.message}. Send the error to Jahin`);
        }
    });
}

server();
