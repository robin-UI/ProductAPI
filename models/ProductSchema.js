const mongoose = require('mongoose'); 

var productSchema = new mongoose.Schema({
    poductname: {
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number
    },
    image: {
        type: Array
    }
})


//Export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;