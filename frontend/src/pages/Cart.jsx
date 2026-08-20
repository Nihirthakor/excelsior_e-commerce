import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Increase quantity
  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item,
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && item.quantity > 1
        ? {
            ...item,
            quantity: item.quantity - 1,
          }
        : item,
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Remove product
  const removeProduct = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Place Order
  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");
      const orderData = {
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
        })),
      };

      console.log("Sending order:", orderData);

      const response = await axios.post(
        "http://localhost:4000/api/orders",
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      console.log(response.data);

      alert("Order placed successfully!");

      // Clear cart after successful order
      localStorage.removeItem("cart");
      setCart([]);
    } catch (error) {
      console.log(error.response?.data || error.message);

      alert("Failed to place order");
    }
  };

  // Calculate total
  const total = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-10">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-lg bg-white p-5 shadow"
          >
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>

              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQuantity(item.id)}
                className="rounded bg-gray-200 px-3 py-1"
              >
                -
              </button>

              <span className="font-bold">{item.quantity}</span>

              <button
                onClick={() => increaseQuantity(item.id)}
                className="rounded bg-gray-200 px-3 py-1"
              >
                +
              </button>
            </div>

            <div className="font-bold">₹{item.price * item.quantity}</div>

            <button
              onClick={() => removeProduct(item.id)}
              className="rounded bg-red-500 px-4 py-2 text-white"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow">
        <h2 className="text-2xl font-bold">Total: ₹{total}</h2>

        <button
          onClick={placeOrder}
          className="mt-5 rounded bg-black px-8 py-3 text-white hover:bg-gray-800"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
