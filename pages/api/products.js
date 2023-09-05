import products from './data/products';

export default function handle(req, res) {
    const {Products} = products;
    if(Products) return res.status(200).json(Products)
    return res.status(200).json({error:"Products not found"})
}