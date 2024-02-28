const tokyHttp = require('http');
const fs = require('fs');
const { ports } = require('./ports_and_more'); // Importing `ports` as a named import
const { url } = require('inspector');

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
        console.log('           ');
        console.log('           ');
        console.log('           ');
        console.log(`url : ${req.url}`);

        const serverClintLog = `url : ${req.url}\n address: ${req.socket.address}\n remoteAddress: ${req.socket.remoteAddress}\n remoteFamily: ${req.socket.remoteFamily}\n remotePort: ${req.socket.remotePort}\n localAddress: ${req.socket.localAddress}\n _construct: ${req.socket._construct}\n _writev: ${req.socket._writev}\n Request Time: ${new Date()}\n User Agent: ${req.headers['user-agent']}`;

        fs.writeFileSync('server_clint_log.txt', serverClintLog);

        fs.readFile('yo.html', function example(err, dataYo) {
            if (err) {
                console.error(`Error reading file: ${err}`);
                res.end();
            } else {

                switch (req.url) {
                    case '/':
                        res.write('you can type /yo, simple, /about, /simple2, /');
                        break;

                    case '/yo':
                        res.write(dataYo);
                        break;

                    case '/simple':
                        fs.readFile('simple.html', (err, dataSimple) => {
                            if (err) {
                                console.error(`Error reading simple.html file: ${err}`);
                                res.statusCode = 500;
                                res.end();
                            } else {
                                res.write(dataSimple);
                                res.end();
                            }
                        });
                        return;

                    case '/simple2':
                        res.write(`<!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>hallo nlg</title>
                        <style>
                        body {
                          margin: 0;
                          padding: 0;
                          font-family: Arial, sans-serif;
                        }
                        
                        .window {
                          position: absolute;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          width: 400px;
                          height: 300px;
                          background-color: #f0f0f0;
                          border-radius: 10px;
                          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
                        }
                        
                        .title-bar {
                          background-color: #0078d4;
                          color: #fff;
                          padding: 10px;
                          border-top-left-radius: 10px;
                          border-top-right-radius: 10px;
                        }
                        
                        .title-bar h3 {
                          margin: 0;
                          font-size: 16px;
                        }
                        
                        .button {
                          width: 30px;
                          height: 30px;
                          background-color: transparent;
                          border: none;
                          outline: none;
                          cursor: pointer;
                          color: #fff;
                          font-weight: bold;
                          margin-right: 5px;
                        }
                        
                        .button:hover {
                          background-color: rgba(255, 255, 255, 0.2);
                          border-radius: 50%;
                        }
                        
                        .content {
                          padding: 20px;
                        }
                        
                        .close-button {
                          position: absolute;
                          top: 5px;
                          right: 45px;
                        }
                        
                        .minimize-button {
                          position: absolute;
                          top: 5px;
                          right: 85px;
                        }
                        
                        .full-screen-button {
                          position: absolute;
                          top: 5px;
                          right: 125px;
                        }
                        </style>
                        </head>
                        <body>
                        <button onclick="reloadWindow()">↻</button>
                        <div class="window">
                          <div class="title-bar">
                            <h3>My Window</h3>
                            <button class="button close-button" onclick="closeWindow()">X</button>
                            <button class="button minimize-button" onclick="minimizeWindow()">-</button>
                            <button class="button full-screen-button" onclick="toggleFullScreen()">□</button>
                          </div>
                          <div class="content">
                            <p>hallo nlg</p>
                          </div>
                        </div>
                        
                        <script>
                        function closeWindow() {
                          var windowElement = document.querySelector('.window');
                          windowElement.style.display = 'none';
                        }
                        
                        function toggleFullScreen() {
                            if (!document.fullscreenElement) {
                              document.documentElement.requestFullscreen();
                            } else {
                              if (document.exitFullscreen) {
                                document.exitFullscreen();
                              }
                            }
                          }
                        
                          function minimizeWindow() {
                            var windowElement = document.querySelector('.window');
                            windowElement.style.display = 'none';
                          }

                          function reloadWindow() {
                            window.location.reload();
                          }

                        </script>
                        
                        </body>
                        </html>
                        `);
                        break;

                    case '/about':
                        res.write('i am gamertoky1188, toky intelligent game, tasnim mahamud toky, tasnim mahamud jahin');
                        break;

                    default:
                        res.write('unknown source. pls check the url or you can type /yo, simple, /about, /simple2, /');
                }

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
