var restler = require('restler')

//esta variable le pega a la api de meli para traer la info de productos
let self = {}

self.busqueda = function(id){ 
  let productos = new Promise(function(resolve, reject){ 
    restler.get('https://api.mercadolibre.com/sites/MLA/search?limit=4&q=' + id).on('complete', function(result) {
    resolve(result);
    }).on('fail', function(err) {
      reject(err)
    })
  })  
  return productos
}

self.producto = function(data){
 let nuevoProducto = []
 let categorias = []
 let items = []

 nuevoProducto.push({
   autor:
     {name: 'Deandra',
     lastname: 'Delgado'},
 })
// este par de variables llenan el array vacio de nuevoProducto
 let categoria = data.filters[0].values[0].path_from_root // en esta linea me estoy posicionando en cada data de la categoria del array
 for (let i = 0; i < categoria.length; i++) {
   categorias.push(categoria[i].name)
 }
 nuevoProducto.push(categorias)

 let results = data.results
 for (let i = 0; i < results.length; i++) {
   items.push({id: results[i].id,
               title: results[i].title,
               price: {currency: results[i].currency_id,
                       amount: results[i].price,
                       decimals: ''},
               picture: results[i].thumbnail,
               condition: results[i].condition,
               free_shipping: results[i].shipping.free_shipping})
 }
 nuevoProducto.push(items)

 return nuevoProducto
}

module.exports = self