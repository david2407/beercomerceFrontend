const { default: Axios } = require("axios");
const { CART_ADD_ITEM } = require("../constants/cartConstants");

const addToCart = (productId, qty) => async (dispatch) => {
  try {
    const { data } = await Axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: productId,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });
  } catch (error) {}
};

export { addToCart };
