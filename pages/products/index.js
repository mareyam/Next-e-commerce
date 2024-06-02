import productData from "../data/data";

export default function handler(req, res) {
  const { Products } = productData;
  if (Products) return res.status(200).json(Products);
  return res.status(200).json({ error: "Not found" });
}
