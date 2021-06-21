const express = require('express')    
const app = express()   
const fs = require('fs') 
const cors = require('cors')

let corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }

const data = {}

function loadData() {
  const file = fs.readFileSync('./pontos_taxi.csv', {encoding: 'utf8'});
  const rows = file.split(/\n/);
  const columns = rows.map(l => l.split(';'));
  const content = columns.splice(1);       
  const list = content.map( rows => rows.map( e => String(e).replace(/"/g, '')));
    
  return list;
}  

app.use(cors(corsOptions))

// Lista todos Pontos
app.get('/list', async (_, res) => { 
    try {      
      res.json(loadData());   

    } catch(e){
        console.log('/list', e);
        res.status(500).json({
          success: false,
          error: 'Unable to fetch list'
        });
      };
  });

// Procura rua por nome  
app.get('/search/:name', (req, res) => {
  const name = req.params.name;
  const list = loadData();
  const result = list.filter(i => i[4].includes(name.toUpperCase()));
  console.log(result);
 
  if(result !== []) {
    return res.json(result);
  }
         
})

// Salva localização
app.post('/save-location', (req, res) => {
   
    console.log(req)
})  

app.listen(8080, () => console.log('rodando'))  