import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });

  const handleChangeProduct = (e) => {
    const { name, value, files } = e.target;

    setProductForm({
      ...productForm,
      [name]: files ? files[0] : value,
    });
  };

  const createProduct = async (e) => {
    e.preventDefault();

    try {
      const formDataProduct = new FormData();

      formDataProduct.append("name", productForm.name);
      formDataProduct.append("slug", productForm.slug);
      formDataProduct.append("description", productForm.description);
      formDataProduct.append("price", productForm.price);
      formDataProduct.append("stock", productForm.stock);
      formDataProduct.append("categoryId", productForm.categoryId);
      formDataProduct.append("image", productForm.image);

      const res = await axios.post(
        "http://localhost:4000/api/product/create",
        formDataProduct,
      );

      console.log(res.data);

      alert("Product created successfully");

      setProductForm({
        name: "",
        slug: "",
        description: "",
        price: "",
        stock: "",
        categoryId: "",
        image: null,
      });
    } catch (error) {
      console.log(error.response?.data || error);
    }
  };
  return (
    <section>
      <div className="my-0 bg-white p-4 sm:my-5 sm:p-6 md:my-10 md:p-10 lg:p-20">
        <h1 className="mb-5 text-xl font-bold sm:text-2xl">Create a Product</h1>

        <form
          onSubmit={createProduct}
          className="mb-8 rounded-lg bg-white p-4 shadow sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Product Name"
              value={productForm.name}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="text"
              name="slug"
              placeholder="Enter Slug"
              value={productForm.slug}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              value={productForm.description}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={productForm.price}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={productForm.stock}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="number"
              name="categoryId"
              placeholder="Category ID"
              value={productForm.categoryId}
              onChange={handleChangeProduct}
              className="w-full rounded border p-3"
              required
            />

            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChangeProduct}
              className="w-full rounded border p-3 md:col-span-2"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-5 w-full rounded bg-black px-6 py-3 text-white sm:w-auto"
          >
            Create Product
          </button>
        </form>
      </div>
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
                className="h-56 w-full object-cover"
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

export default Category;
