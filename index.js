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
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

 