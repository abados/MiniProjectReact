import axios from "axios";

// export const getProducts = async () => {
//   let response = await axios.get("http://localhost:7027/api/Products");
//   return Object.values(response.data);
// };

export const getProducts = async () => {
  return await axios
    .get("http://localhost:7027/api/Users/GET")
    .then((response) => {
      return Object.values(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addMessage = async (CostumerMessage) => {
  await axios.post("http://localhost:7027/api/Users/ADD", CostumerMessage);
};

export const getProductsById = async (ProductId) => {
  return await axios
    .get(`http://localhost:7027/api/Users/ADD/${ProductId}`)
    .then((response) => {
      return Object.values(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const UpdateProductsById = async (ProductToUpdate) => {
  await axios.post(
    "http://localhost:7027/api/Users/UpdateOne",
    ProductToUpdate
  );
};

export const deleteProductFromDb = async (productID) => {
  try {
    console.log(productID);
    let endpoint = `http://localhost:7027/api/Users/DELETE/${productID}`;
    await axios.delete(endpoint);
  } catch (error) {
    console.error(error);
  }
};
