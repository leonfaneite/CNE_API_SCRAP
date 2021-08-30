const AbortController = require("abort-controller")

const cheerio = require("cheerio")
const fetch = require("node-fetch")


var express = require('express')
var router = express.Router()   
var app = express()               

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.use('/api', router)

router.get('/', function(req, res) {
  res.json({mensaje: '¡Bienvenido a nuestra API!'})
})




//const URL = "http://localhost:3001";

// function to get the raw data
function getRawData (URL){
   
const controller = new AbortController();


const timeout = setTimeout(
  () => {controller.abort()},
  5000,
);

    
  return fetch(URL, {signal: controller.signal})

      
      .then((response) => response.text())
      .then((data) => {
       
         return data;
      }, 
      
      );
};



router.get('/:cedula', function(req, res) {
   
//16754397

(async () =>{ 

const URL = `http://www.cne.gob.ve/web/registro_electoral/ce.php?nacionalidad=V&cedula=${req.params.cedula}`;




const cne_data = await getRawData(URL);


const $ = cheerio.load(cne_data);

const data = $('b, td').first().text()

const data_c = data.split("\t")


const result = data_c.filter( c => c.length > 3 );

var datos = new Object()

datos.Cedula = result[3]

datos.Nombre = result[5]

datos.Estado = result[7]
datos.Municipio = result[9]
datos.Parroquia = result[11]
datos.Centro = result[13]
datos.Direccion = result[15]

var re_22 = result[22]

if (re_22 != undefined && re_22.length > 40)  {

  const r = /([A-Z])\w([a-z]\w+.....................................................................................................................)/
  var re = re_22.match(r)
  var reg = re.join()
  datos.mesa = reg

} else if(result[22] === undefined) {

  datos.mesa = " "

} else {

  datos.mesa ="No trabajara en mesa"
}

const datosf = JSON.stringify(datos)

res.json(datosf)

})();

})


app.listen(port)
console.log('API escuchando en el puerto ' + port)