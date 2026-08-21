import { Routes, Route } from "react-router-dom";
import Header from "./header/header.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./admin/admin.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./footer/Footer.jsx";
import Category from "./pages/Category.jsx";
import Register from "./pages/Register.jsx";
import AdminDash from "./admin/AdminDash.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import CategoryAdmin from "./admin/Category.jsx";
import Product from "./pages/Product.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import UpdateCategory from "./admin/UpdateCategory.jsx";
import UpdateProduct from "./admin/UpdateProduct.jsx";
import Cart from "./pages/Cart.jsx";
import Orders from "./pages/Orders.jsx";
import AllOrders from "./admin/AllOrders.jsx";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/home" element={<Home />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="/AdminDash" element={<AdminDash />} />
          <Route path="/Orders" element={<Orders />} />

          {/* Normal User Category */}
          <Route path="/Category" element={<Category />} />
          <Route path="/Cart" element={<Cart />} />

          {/* Admin Category */}
          <Route
            path="/Admin/Category"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <CategoryAdmin />
              </ProtectedRoute>
            }
          />

          <Route
            path="/Admin/AllOrders"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AllOrders />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/updateCategory/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <UpdateCategory />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/UpdateProduct/:id"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <UpdateProduct />
              </ProtectedRoute>
            }
          />

          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
