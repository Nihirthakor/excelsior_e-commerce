import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    slug: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  // Get single category
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/api/category/getSingle/${id}`,
      );

      const category = res.data.data;

      setData({
        name: category.name || "",
        slug: category.slug || "",
        image: null,
      });

      setImagePreview(
        category.image ? `http://localhost:4000${category.image}` : "",
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  // Handle name and slug
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setData((prev) => ({
      ...prev,
      image: file,
    }));

    setImagePreview(URL.createObjectURL(file));
  };

  // Update category
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("slug", data.slug);

      if (data.image) {
        formData.append("image", data.image);
      }

      const res = await axios.put(
        `http://localhost:4000/api/category/update/category/${id}`,
        formData,
      );

      console.log(res.data);

      if (res.data.success) {
        alert("Category updated successfully!");

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

export default UpdateCategory;
