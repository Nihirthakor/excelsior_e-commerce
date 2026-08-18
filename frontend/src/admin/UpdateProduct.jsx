import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    stock: "",
    image: null,
  });

  const [imagePreview, setImgPreview] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/product/getSingle/${id}`,
      );

      const product = res.data.data;

      setData({
        name: product.name || "",
        slug: product.slug || "",
        description: product.description || "",
        price: product.price || "",
        stock: product.stock || "",
      });

      setImgPreview(
        product.image ? `http://localhost:4000${product.image}` : "",
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setData((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("slug", data.slug);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("stock", data.stock);

      if (data.image) {
        formData.append("image", data.image);
      }

      const res = await axios.put(
        `http://localhost:4000/api/product/updateProduct/${id}`,
        formData,
      );

      console.log(res.data);

      if (res.data.success) {
        alert("product updated successfully!");

        navigate("/admin");
      }
    } catch (error) {
      console.log(error);
      alert("Failed to update category");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold">Update Category</h1>

        <form onSubmit={handleSubmit}>
          {/* Category Name */}
          <div className="mb-4">
            <label className="mb-2 block font-medium">Category Name</label>

            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter category name"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Category Slug */}
          <div className="mb-4">
            <label className="mb-2 block font-medium">Category Slug</label>

            <input
              type="text"
              name="slug"
              value={data.slug}
              onChange={handleChange}
              placeholder="Enter category slug"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium">product description</label>

            <input
              type="text"
              name="description"
              value={data.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium">product price</label>

            <input
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="Enter product price"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block font-medium">product stock</label>

            <input
              type="number"
              name="stock"
              value={data.stock}
              onChange={handleChange}
              placeholder="Enter product stock"
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Category Image */}
          <div className="mb-5">
            <label className="mb-2 block font-medium">Category Image</label>

            {imagePreview && (
              <img
                src={imagePreview}
                alt={data.name}
                className="mb-3 h-32 w-32 rounded-lg object-cover"
              />
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white hover:bg-blue-700"
          >
            Update Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
