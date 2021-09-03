const express = require('express')

const QuestionsController = require('./controllers/QuestionsController')
const RoomController = require('./controllers/RoomController')
const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page:'create-pass'}))

route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)

route.post('/question/create/:room', QuestionsController.create)
route.post('/question/:room/:question/:action', QuestionsController.index)


module.exports = route