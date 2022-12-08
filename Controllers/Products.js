const getAllProducts = async (req, res) => {
  res.status(200).json({ msg: "All Products are taken" });
};
const getAllProductsTesting = async (req, res) => {
  res.status(200).json({ msg: "All Testing Products are taken" });
};

module.exports = { getAllProducts, getAllProductsTesting };
