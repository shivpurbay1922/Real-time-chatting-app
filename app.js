const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const path = require('path');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const Message = require('./models/Message');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: 1 });
    res.render('index', { messages });
});

io.on('connection', socket => {
    socket.on('chat message', async (msg) => {
        const message = new Message({ content: msg });
        await message.save();
        io.emit('chat message', msg);
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
