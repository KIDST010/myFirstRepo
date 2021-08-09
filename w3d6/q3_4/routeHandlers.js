const Product = require('./product'); // the Product class.

module.exports.homePage = (req, res) => {
    res.render('registerProducts');
}
module.exports.productDetails = (req,res) =>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let quantity = req.body.quantity;
    let price = req.body.price;
    new Product(id,name,description,quantity, price).save();
    res.redirect(303,'/product_list');
}
module.exports.productsInShoppingCart = (req,res) =>{
    let id = req.body.id;
    let name = req.body.name;
    let description = req.body.description;
    let quantity = req.body.quantity;
    let price = req.body.price;
    new Product(id,name,description,quantity, price).save();
    res.redirect(303,'/itemsInShoppingCart');
}

module.exports.productList = (req,res) =>{
    res.render('product',{itemList: Product.getAll()});
}
module.exports.shoppingCartItems = (req,res) =>{
    res.render('shoppingcart',{shoppingCartList: Product.getAll()});
}
module.exports.serverMessage = (err) => {
    if(err){
        console.log("Error:::"+err);
    }
    console.log(`Server is running on port 9090`);
}
