const mongoose = require('mongoose'); 

var productSchema = new mongoose.Schema({
    poductname: {
        type:String,
        required:true,
        index:true,
    },

    description: {
        type: String,
        required:true,
    },

    price: {
        type: Number,
        required:true,
    },

    descount: {
        type: Number,
        default: "0"
    },

    shippingCharge: {
        type: Number
    },

    image: {
        type: Array,
        required:true,
    }
})


//Export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product;