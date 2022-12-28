import React, { useState, useEffect } from "react";
import { deleteProductFromDb, getProducts } from "../../services/service";
import "./products.css";
import { ClockLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

export const ProductsPage = () => {
  const [productsData, setProductsData] = useState([]);
  const navigate = useNavigate();

  const getProductsFromDB = async () => {
    let res = await getProducts();
    setProductsData(res);
  };

  useEffect(() => {
    setTimeout(() => {
      getProductsFromDB();
    }, 3000);

    console.log(productsData);
  }, []);

  const [expanded, setExpanded] = useState(false);
  const [key, setKey] = useState();

  function handleClick(productKey) {
    setExpanded(!expanded);
    setKey(productKey);
  }

  // function handleUpadate(product) {
  //   navigate("/editProduct", {
  //     state: product,
  //   });
  // }

  const handleUpadate = (product, productID, productName) => {
    navigate("/editProduct", {
      state: {
        product,
        productID,
        productName,
      },
    });
  };

  const handleDelete = (productID) => {
    deleteProductFromDb(productID);
  };

  return (
    <div className="my-tbl">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Units In Stock</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {productsData && productsData.length > 0 ? (
            productsData.map((product) => {
              return (
                <>
                  <tr onClick={() => handleClick(product.productID)}>
                    <th scope="row">{product.productID}</th>
                    <td>{product.productName}</td>
                    <td>{product.unitPrice}$</td>
                    <td>{product.unitsInStock}</td>
                    <td>
                      <button
                        className="btn btn-primary"
                        onClick={() =>
                          handleUpadate(
                            product,
                            product.productID,
                            product.productName
                          )
                        }
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(product.productID)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                  {expanded && product.productID === key ? (
                    <tr className="expanded">
                      <td colSpan={4} className="expanded">
                        <h4>{product.productName} Description : </h4>
                        {product.quantityPerUnit}
                      </td>
                    </tr>
                  ) : null}
                </>
              );
            })
          ) : (
            <tr className="clock--tr">
              <td className="clock--td" colSpan={4}>
                <ClockLoader color="#36d7b7" size={86} />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
