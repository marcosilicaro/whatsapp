const express = require('express')
const mongoose = require('mongoose')
const Conversations = require('./dbConversations.js')
const Messages = require('./dbMessages.js')
const Users = require('./dbUsers.js')
const ObjectId = require('mongodb').ObjectID;

// server config
const app = express()
const port = process.env.PORT || 9000


// conexion mongoose
const connection_url = "mongodb+srv://whatsapp-user:zIcwQLiAPztigAxd@cluster0.obprb.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})


// middleware
app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})


// routes

// GET prueba
app.get('/', (req, res) => {
    res.status(200).json({ 'name': 'marco pija' })
})


// GET conversations by userIdsInvolved (para sidebar)
app.get('/conversations/:userIdsInvolved', (req, res) => {
    Conversations.find({ "userIdsInvolved": req.params.userIdsInvolved },
        (err, data) => {
            res.status(200).json(data)
        })
})

// GET users by _id 
app.get('/users/:_id', (req, res) => {
    Users.find({ "_id": ObjectId(`${req.params._id}`) },
        (err, data) => {
            if (err) throw err
            res.status(200).json(data)
        })
})


// GET messages by conversationId (para chat)
app.get('/messages/:conversationId', (req, res) => {
    Messages.find({ "conversationId": req.params.conversationId },
        (err, data) => {
            if (err) throw err
            res.status(200).json(data)
        })
})


// POST conversation
app.post('/conversations/new', (req, res) => {
    Conversations.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// POST message
app.post('/messages/new', (req, res) => {
    Messages.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// POST user
app.post('/users/new', (req, res) => {
    Users.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, () => {
    console.log('runnning server...')
})