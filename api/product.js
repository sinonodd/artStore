const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');
const products = db.get('products');
const Joi = require('joi');
const schema = Joi.object({
    id: Joi.string().trim()
});

router.get('/:id', async (req,res,next) => {
    const result = schema.validate(req.params);
    if (result.error === undefined) {
        const { id: _id } = req.params;
        const query = {_id};
        const product = await products.find(query);
        if (product) {
            res.json(product);
        } else {
            next(error);
        } 
    } else {
        next(error);
    }
});
module.exports = router;
