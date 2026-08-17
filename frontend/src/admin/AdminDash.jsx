import React, { useState } from "react";

const AdminDash = () => {
  const [activeMenu, setActiveMenu] = useState("All Users");

  const menuItems = [
    "All Users",
    "All Admins",
    "All Products",
    "All Categories",
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 min-h-screen bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-10">Admin Panel</h1>

        <div className="flex flex-col gap-3">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setActiveMenu(item)}
              className={`text-left px-4 py-3 rounded-lg transition ${
                activeMenu === item ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">{activeMenu}</h1>

        <div className="bg-white p-6 rounded-xl shadow">
          {activeMenu === "All Users" && (
            <h2 className="text-xl">All Users List</h2>
          )}

          {activeMenu === "All Admins" && (
            <h2 className="text-xl">All Admins List</h2>
          )}

          {activeMenu === "All Products" && (
            <h2 className="text-xl">All Products List</h2>
          )}

          {activeMenu === "All Categories" && (
            <h2 className="text-xl">All Categories List</h2>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDash;
