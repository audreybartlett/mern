const { Product } = require('../models/product');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
});

router.post('/', async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
        error: false,
        product
    })
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
        error: false,
        product
    })

});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
        error: false,
        product
    })

});

module.exports = router;