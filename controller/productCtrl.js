const Product = require('../models/ProductSchema');

let discount = 2;
let shippingCharge = 100;

const asyncHandler = require('express-async-handler');
const { validateMongodb } = require('../utils/validateMongodb');

const getAllProduct = asyncHandler(async function (req, res) {
    const product = await Product.find()
    res.json(product)
});

const addProduct = asyncHandler(async function (req, res) {

    const files = req.files;

    if (!files) {
        throw new Error("please choose the images")
    }

    let filenames = req.files.map(function (file) {
        return file.filename;
    });

    req.body.price = ( req.body.price - ((discount/100) * req.body.price)) + shippingCharge

    req.body.image = filenames;

    try {
        let product = await Product.create(req.body)

        if (!product) {
            throw new Error("Product could not add to db")
        }

        return res.status(200).json({ message: "Product add successfuly", status: true, payload: product })

    } catch (error) {
        throw new Error("Product could not add to db")
    }

});

const editProduct = asyncHandler( async function (req, res) {
    const id = req.params.id
    const file = req.files

    validateMongodb(id);

    if (file[0]) {
        console.log("I am hear");
        let filenames = req.files.map(function (file) {
            return file.filename;
        });
        req.body.image = filenames;
    }

    console.log(req.body);
    try {
        const updateUser = await Product.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        );

        res.json(updateUser);
    } catch (error) {
        throw new Error("Could not edit the product")
    }

});

const deleteProduct = asyncHandler(async function (req, res) {
    try {
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.json({ message: "Product Delete successfuly", status: true, deleteProduct })
    } catch (error) {
        throw new Error("Some error occure in server")
    }

})


module.exports = {
    getAllProduct,
    addProduct,
    editProduct,
    deleteProduct
}