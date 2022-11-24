const mongoose = require("mongoose");



const productSchema = new mongoose.Schema({
    image: { type: String, requried: true },
    name: { type: String, requried: true },
    price: { type: String, requried: true },
    offer: { type: String, requried: true },
    Availablity: { type: String, requried: true },
    Color: { type: String, requried: true }

}

);



module.exports = mongoose.model("product", productSchema);