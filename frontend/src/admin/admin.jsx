import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Admins = () => {
  const [activeMenu, setActiveMenu] = useState("All Users");

  const [admins, setAdmins] = useState([]);
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ADMIN",
  });
  const [productForm, setProductForm] = useState({
    name: "",
    slug: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    image: null,
  });
  const menuItems = [
    "All Users",
    "All Admins",
    "All Products",
    "All Categories",
  ];

  useEffect(() => {
    getUsers();
    getProducts();
    getCategories();
  }, []);

  // Get all users and separate USER and ADMIN
  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:4000/api/auth/allUser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const allUsers = res.data.data;

      setUsers(allUsers.filter((item) => item.role === "USER"));

      setAdmins(allUsers.filter((item) => item.role === "ADMIN"));
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // Get all products
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

  // Get all categories
  const getCategories = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/category/");

      setCategories(res.data.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // Handle form input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Create admin
  const createAdmin = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      await axios.post("http://localhost:4000/api/auth/register", form, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Admin created successfully");

      setForm({
        name: "",
        email: "",
        password: "",
        role: "ADMIN",
      });

      getUsers();
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  // Delete user or admin
  const deleteUser = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?",
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      await axios.delete(`http://localhost:4000/api/auth/deleteUser/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      getUsers();

      alert("User deleted successfully");
    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

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
    <div className="min-h-screen bg-gray-100 md:flex ">
      <aside className="w-full bg-gray-900 p-4 text-white md:min-h-screen md:w-64 md:p-5">
        <h1 className="mb-10 text-2xl font-bold">Admin Panel</h1>

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`rounded-lg px-4 py-3 text-left transition ${
                activeMenu === item ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="min-w-0 flex-1 p-4 sm:p-6 md:p-8">
        <h1 className="mb-6 text-2xl font-bold sm:text-3xl">{activeMenu}</h1>
        {/* ALL USERS */}
        {activeMenu === "All Users" && (
          <div className="overflow-x-auto rounded-lg bg-white shadow">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Role</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b text-center">
                    <td className="p-4">{user.name}</td>

                    <td className="p-4">{user.email}</td>

                    <td className="p-4">{user.role}</td>

                    <td className="p-4">
                      <button
                        onClick={() => deleteUser(user.id)}
                        className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* ALL ADMINS */}
        {activeMenu === "All Admins" && (
          <div>
            {/* Create Admin */}
            <form
              onSubmit={createAdmin}
              className="mb-8 rounded-lg bg-white p-6 shadow"
            >
              <h2 className="mb-4 text-xl font-bold">Create Admin</h2>

              <div className="grid gap-4 md:grid-cols-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  className="rounded border p-3"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="rounded border p-3"
                  required
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="rounded border p-3"
                  required
                />
              </div>

              <button
                type="submit"
                className="mt-4 rounded bg-black px-6 py-3 text-white"
              >
                Create Admin
              </button>
            </form>

            {/* Admin Table */}
            <div className="overflow-x-auto rounded-lg bg-white shadow">
              <table className="w-full">
                <thead className="bg-black text-white">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Role</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {admins.map((admin) => (
                    <tr key={admin.id} className="border-b text-center">
                      <td className="p-4">{admin.name}</td>

                      <td className="p-4">{admin.email}</td>

                      <td className="p-4">{admin.role}</td>

                      <td className="p-4">
                        <button
                          onClick={() => deleteUser(admin.id)}
                          className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ALL PRODUCTS */}
        {activeMenu === "All Products" && (
          <section>
            <div className="my-0 bg-white p-4 sm:my-5 sm:p-6 md:my-10 md:p-10 lg:p-20">
              <h1 className="mb-5 text-xl font-bold sm:text-2xl">
                Create a Product
              </h1>

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
        )}

        {/* ALL CATEGORIES */}
        {activeMenu === "All Categories" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div
                key={category.id}
                className="overflow-hidden rounded-lg bg-white shadow"
              >
                {category.image && (
                  <img
                    src={`http://localhost:4000${category.image}`}
                    alt={category.name}
                    className="h-48 w-full object-cover"
                  />
                )}

                <div className="p-5">
                  <h2 className="text-xl font-semibold">{category.name}</h2>

                  {category.slug && (
                    <p className="mt-2 text-gray-500">{category.slug}</p>
                  )}
                  <Link
                    to="/Admin/Category"
                    className="mt-4 block w-full rounded-lg capitalize bg-green-600 py-2 text-center text-white hover:bg-green-700"
                  >
                    create a product
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admins;
