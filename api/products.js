const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');
const products = db.get('products');
const Joi = require('joi');

const schema = Joi.object({
    name: Joi.string().alphanum().required(),
    price: Joi.number().required().required(),
    category: Joi.string().alphanum().required(),
    image: Joi.string().uri({scheme: [/https/]})
});

router.get('/', async (req,res) => {
    const result = await products.find();
    res.json(result);
});
router.post('/', async (req,res,next) => {
    const result = schema.validate(req.body);
    if (result.error === undefined) {
        const product = {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            image: req.body.image
        };
        const insertedProduct = await products.insert(product);
        res.json(insertedProduct);
    } else {
        const error = new Error(result.error);
        res.status(422)
        next(error);
    }

});
router.patch('/:id', async (req,res) => {
    const {id:_id} = req.params;
    const result = schema.validate(req.body);
    if (result.error === undefined) {
        const query = {_id};
        const product = await products.find(query);
        if (product) {
            const update = req.body;
            const updatedPrduct = await products.findOneAndUpdate(query, { $set: update });
            res.json(updatedPrduct);
        } else {
            next(error);
        }
    } else {
        throw new Error(result.error);
        res.status(422);
        next(error);
    }
});
router.delete('/:id', async (req,res) => {
    const {id:_id} = req.params;
    await products.remove({_id});
    res.send('Deleted');
});
module.exports = router;
