import axios from "axios";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:4000/api/orders/my-orders",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(res.data);

      setOrders(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-10 text-center">Loading orders...</div>;
  }

  return (
 <div className="mx-auto min-h-screen max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <div className="rounded-lg border p-10 text-center">
          <h2 className="text-xl font-semibold">
            No Orders Found
          </h2>

          <p className="mt-2 text-gray-500">
            You have not placed any orders yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-lg border bg-white p-5 shadow-sm"
            >
              {/* Order Header */}
              <div className="mb-5 flex flex-wrap items-center justify-between gap-4 border-b pb-4">
                <div>
                  <h2 className="text-lg font-bold">
                    Order #{order.id}
                  </h2>

                  <p className="text-sm text-gray-500">
                    Order Date:{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="text-right">
                  <span className="rounded bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    {order.status}
                  </span>

                  <p className="mt-3 text-lg font-bold">
                    Total: ₹{order.totalAmount}
                  </p>
                </div>
              </div>

              {/* Products */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">
                  Products
                </h3>

                {order.items?.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row sm:items-center"
                  >
                    <img
                      src={`http://localhost:4000${item.product?.image}`}
                      alt={item.product?.name}
                      className="h-28 w-28 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <h2 className="text-lg font-bold">
                        {item.product?.name}
                      </h2>

                      <p className="mt-1 text-gray-600">
                        {item.product?.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-5">
                        <p>
                          <span className="font-semibold">
                            Price:
                          </span>{" "}
                          ₹{item.price}
                        </p>

                        <p>
                          <span className="font-semibold">
                            Quantity:
                          </span>{" "}
                          {item.quantity}
                        </p>
                      </div>
                    </div>

                    <div className="text-lg font-bold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
