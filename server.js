const express = require('express');
const productsRouter = require('./routers/productsRouter')
const mongoose = require('mongoose')
const app = express();
const MONGODB_CONNECT = 'mongodb+srv://iramgutzglez:PolaeoVvneDNjYWL@cluster0.pzs2exz.mongodb.net/43375-clase15?retryWrites=true&w=majority'
mongoose.connect(MONGODB_CONNECT)
.then(()=>console.log('conexion DB'))
.catch((error) => console.log(error))
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