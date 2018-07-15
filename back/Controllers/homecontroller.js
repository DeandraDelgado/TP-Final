services = require('../Services/services.js')

let self = {}

self.buscarProductos = function(req, res){
    let id = req.params.id
    // esto me llama a la funcion del servicio  
    services.busqueda(id).then(function(productos){
      const a = services.producto(productos)
      return res.json(a) //lo que me esta llamando a nuevo producto
    }).catch(function(err) {
      console.log(err)
    })     
   };

module.exports = self