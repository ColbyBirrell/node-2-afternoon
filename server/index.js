const express = require('express')
const mc = require('./controllers/messages_controller')

const app = express()
const PORT = 3001
let baseUrl = '/api/messages'


app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post(baseUrl, mc.create)
app.get(baseUrl, mc.read)
app.put(`${baseUrl}/:id`, mc.update)
app.delete(`${baseUrl}/:id`, mc.delete)










app.listen(PORT, () => {
    console.log(`<--- Listening on Port ${PORT}--->`)
})