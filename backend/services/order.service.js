const prisma = require("../config/prisma.js");

const createOrder = async (userId, items) => {
  console.log("ORDER SERVICE REACHED");
  console.log("User ID:", userId);
  console.log("Items:", items);
  // Get all product IDs
  const productIds = items.map((item) => item.productId);

  // Find products
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
  });

  // Check if all products exist
  if (products.length !== productIds.length) {
    throw new Error("One or more products not found");
  }

  let totalAmount = 0;

  const orderItems = [];

  for (const item of items) {
    const product = products.find((product) => product.id === item.productId);

    // Check stock
    if (product.stock < item.quantity) {
      throw new Error(`${product.name} does not have enough stock`);
    }

    // Calculate price
    const itemPrice = Number(product.price);
    const itemTotal = itemPrice * item.quantity;

    totalAmount += itemTotal;

    orderItems.push({
      productId: product.id,
      quantity: item.quantity,
      price: product.price,
    });
  }

  // Create order and reduce stock
  const order = await prisma.$transaction(async (tx) => {
    // Create order
    const newOrder = await tx.order.create({
      data: {
        userId,
        totalAmount,
        status: "PENDING",

        items: {
          create: orderItems,
        },
      },

      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });

    // Reduce stock
    for (const item of items) {
      await tx.product.update({
        where: {
          id: item.productId,
        },

        data: {
          stock: {
            decrement: item.quantity,
          },
        },
      });
    }

    return newOrder;
  });

  return order;
};

const getMyOrders = async (userId) => {
  return await prisma.order.findMany({
    where: {
      userId,
    },

    include: {
      items: {
        include: {
          product: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

const getOrderById = async (orderId, userId, role) => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },

    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },

      items: {
        include: {
          product: true,
        },
      },
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  // Normal users can only see their own order
  if (role !== "ADMIN" && order.userId !== userId) {
    throw new Error("You are not authorized to view this order");
  }

  return order;
};

const getAllOrders = async () => {
  return await prisma.order.findMany({
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },

      items: {
        include: {
          product: true,
        },
      },
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

const updateOrderStatus = async (orderId, status) => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  return await prisma.order.update({
    where: {
      id: orderId,
    },

    data: {
      status,
    },
  });
};

const cancelOrder = async (orderId, userId, role) => {
  const order = await prisma.order.findUnique({
    where: {
      id: orderId,
    },

    include: {
      items: true,
    },
  });

  if (!order) {
    throw new Error("Order not found");
  }

  // User can cancel only their own order
  if (role !== "ADMIN" && order.userId !== userId) {
    throw new Error("You are not authorized to cancel this order");
  }

  if (order.status === "COMPLETED") {
    throw new Error("Completed order cannot be cancelled");
  }

  if (order.status === "CANCELLED") {
    throw new Error("Order is already cancelled");
  }

  return await prisma.$transaction(async (tx) => {
    // Restore stock
    for (const item of order.items) {
      await tx.product.update({
        where: {
          id: item.productId,
        },

        data: {
          stock: {
            increment: item.quantity,
          },
        },
      });
    }

    // Update order status
    return await tx.order.update({
      where: {
        id: orderId,
      },

      data: {
        status: "CANCELLED",
      },
    });
  });
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
};
