import data from '../data/products'

export default function handler(req, res) {
    const {Products} = data;
    if(Products) return res.status(200).json(Products);

    return res.status(404).json({error:'Data Not Found'})
}