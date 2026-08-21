import axios from "axios";
import React, { useEffect, useState } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/orders/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      setOrders(res.data.data.order);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">All Orders</h1>

      {orders.map((order) => (
        <div
          key={order.id}
          className="rounded-lg border bg-white p-5 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <div>
              <h2 className="text-lg font-bold">Order #{order.id}</h2>

              <p className="text-sm text-gray-500">
                Customer: {order.user?.name}
              </p>

              <p className="text-sm text-gray-500">{order.user?.email}</p>
            </div>

            <div className="text-right">
              <span className="rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                {order.status}
              </span>

              <p className="mt-2 font-bold">Total: ₹{order.totalAmount}</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Products</h3>

            {order.items?.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-lg border p-4"
              >
                <img
                  src={`http://localhost:4000${item.product?.image}`}
                  alt={item.product?.name}
                  className="h-24 w-24 rounded object-cover"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-bold">{item.product?.name}</h2>

                  <p className="text-gray-600">{item.product?.description}</p>

                  <p className="mt-2">Price: ₹{item.product?.price}</p>

                  <p>Quantity: {item.quantity}</p>

                  <p>Stock: {item.product?.stock}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllOrders;
