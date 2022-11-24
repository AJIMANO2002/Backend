
const route = require("./router")
const products = require("./productSchema")
const user = require("./schema")






route.post("/products", async (req, res) => {
    try {

        const data = new products({
            image: req.body.image,
            name: req.body.name,
            price: req.body.price,
            offer: req.body.offer,
            Availablity: req.body.Availablity,
            Color:req.body.Color



        });


        const product = await data.save();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send("error");

    }

});

route.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if (qNew) {
            products = await item.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await item.find({
                itemcategory: {
                    $in: [qCategory],
                },
            });
        } else {
            products = await item.find();
        }
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).send("error");
    }
});


route.get("/productsDetails", async (req, res) => {
    try {
        const data = await products.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send({ error: "cannot fetchproductby id" });
    }
});

route.get("/userDetails", async (req, res) => {
    try {
        const data = await user.find();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).send({ error: "cannot fetchproductby id" });
    }
});


route.put("/products/:id", async (req, res) => {
    try {
        const updatedProduct = await item.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },

            { new: true }
        );

        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});


route.delete("/products/:id", async (req, res) => {
    try {
        await item.findByIdAnddelete(req.params.id);

        res.status(200).json("product has been Deleted....");
    } catch (err) {
        res.status(500).send({ error: "cannot fetch product by id" });
    }
});

module.exports = route







