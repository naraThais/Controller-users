const express = require('express');
const app = express();

app.use(express.json());


const ControllerUsers = require('./controllers/ControllersUsers');

//USUARIOS
app.post('/usuario/insert', ControllerUsers.insert);

const PORT = process.env.PORT || 8089;
app.listen(PORT, () => {
    console.log(`API RODANDO NA PORTA ${PORT}`);
})

