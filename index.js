const express = require('express')
const app = express()
const PORT = 4000

app.get('/',(req ,res) => {
  res.send('This is my API Running...')
})

app.get('/about',(req ,res) => {
  res.send('This is my about route')
})

app.listen(PORT, () => {
  console.log(`API Listening on PORT ${PORT}`);
});

module.exports = app

 