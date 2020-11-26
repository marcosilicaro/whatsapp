import express from 'express'
import mongoose from 'mongoose'
import Conversations from './dbConversations.js'
import Messages from './dbMessages.js'
import Users from './dbUsers.js'

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

// routes

// GET prueba
app.get('/', (req, res) => {
    res.status(200).json({ 'name': 'marco pija' })
})

// GET messages by conversationId
app.get('/messages/:conversationId', (req, res) => {
    Messages.find({ "conversationId": req.params.conversationId },
        (err, data) => {
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