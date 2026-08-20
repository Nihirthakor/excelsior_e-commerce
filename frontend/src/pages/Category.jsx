import axios from "axios";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/product/getAllProduct",
      );
      console.log(res.data.data);

      setProduct(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  const addToCart = (item) => {
    const oldCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = oldCart.find((cartItem) => cartItem.id === item.id);

    let updatedCart;

    if (existingProduct) {
      updatedCart = oldCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem,
      );
    } else {
      updatedCart = [
        ...oldCart,
        {
          ...item,
          quantity: 1,
        },
      ];
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert("Product added to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-10">
      <h1 className="mb-8 text-3xl font-bold">Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {product.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-lg bg-white shadow"
          >
            <div className="overflow-hidden">
              <img
                src={`http://localhost:4000${item.category.image}`}
                alt={item.name}
                className="h-64 w-full object-fill"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-semibold">{item.name}</h2>

              <p className="mt-2 text-gray-600">₹{item.price}</p>

              <p className="mt-1 text-sm text-gray-500">Stock: {item.stock}</p>

              <button
                onClick={() => addToCart(item)}
                disabled={item.stock <= 0}
                className="mt-4 w-full rounded bg-black px-4 py-2 text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {item.stock > 0 ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
