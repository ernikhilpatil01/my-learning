//importing modules 
mongoose = require('mongoose')
express = require('express')
bodyparser = require('body-parser')
cors = require('cors')
path = require('path')
app = express()

const route = require('./routes/route');

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/astrotak');

//on connection
mongoose.connection.on('connected',()=>{
    console.log('Connected to mongodb @ 27017');
});


//on connection
mongoose.connection.on('error',(err)=>{
    if(err){
        console.log('Error at database connection '+err);
    }
    console.log('Connected to mongodb @ 27017');
});


const port = 3000;//port number


//adding middleware -cors
app.use(cors());

//body - parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/astro-tak', route);

//testing server
app.get('/',(req, res)=>{
    res.send('Astro Tak');
});

//binding server with port
app.listen(port, ()=>{
    console.log("Server started at port "+port);    
});