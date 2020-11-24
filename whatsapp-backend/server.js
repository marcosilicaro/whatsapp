const express = require('express')
const mongoose = require('mongoose')

// server config
const app = express()
const port = process.env.PORT || 9000


// conexion mongoose
const url = "mongodb+srv://whatsapp-user:zIcwQLiAPztigAxd@cluster0.obprb.mongodb.net/whatsappdb?retryWrites=true&w=majority";
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// routes
app.get('/', (req, res) => {
    res.status(200).json({ 'name': 'marco pija' })
})

app.listen(port, () => {
    console.log('runnning server...')
})