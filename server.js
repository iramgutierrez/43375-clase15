const express = require('express');
const productsRouter = require('./routers/productsRouter')

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/products', productsRouter)

app.get('/', (req, res) => {
    res.json({
        status: 'running',
        
    })
})



const PORT = 8080;
app.listen(PORT, () => console.log(`servidor corriendo en puerto ${PORT}`));