const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '* ',
    },
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/index.html'));
});

io.on('connection', (socket) => {
    console.log('server socket id : ', socket.id);

    socket.on('chat', (payload) => {
        console.log('payload ->', payload);
        io.emit('chat', payload);
    });
});

server.listen(4000, () => {
    console.log(`App listening on 4000`);
});
