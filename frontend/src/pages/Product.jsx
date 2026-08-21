import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/product/getAllProduct",
      );

      setProducts(res.data.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };
  return (
    <section>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={`http://localhost:4000${item.image}`}
                alt={item.name}
                className="h-56 w-fit object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-bold">{item.name}</h2>

              <p className="mt-1 text-gray-500">{item.slug}</p>
              <div className="my-3">
                <p>{item.description}</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p>{item.stock}</p>
                </div>
                <div className="flex gap-2">
                  <h1>price:</h1>
                  <h2>
                    <p>{item.price}</p>
                  </h2>
                </div>
              </div>

              <ul className="flex text-orange-400">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <CiStar />
                </li>
              </ul>

              <Link
                to="/Category"
                className="mt-4 block w-full rounded-lg capitalize bg-green-600 py-2 text-center text-white hover:bg-green-700"
              >
                buy product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Product;
