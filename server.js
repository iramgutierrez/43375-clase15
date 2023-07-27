const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.json({
        status: 'running',
        
    })
})

const PORT = 8080;
app.listen(PORT, () => `servidor corriendo en puerto ${PORT}`);