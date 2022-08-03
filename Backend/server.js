const express = require('express');
const http = require('http');
const WebSocket = require('ws');
/* IMPORTS */


const config = require('./config.json');
const port = '6969' | config.port;
const server = http.createServer(express);
const wss = new WebSocket.Server({ server });


wss.on('connection', function connection(ws){
    console.log('New Websocket connection')
    ws.on('message', function incoming(message) {
        console.log(message)
        wss.clients.forEach(function each(client){
            if(client !== ws && client.readyState === WebSocket.OPEN){
                client.send(message);
            }
        })
    })
})

server.listen(port, () => console.log(`Server is listening in port ${port}`));