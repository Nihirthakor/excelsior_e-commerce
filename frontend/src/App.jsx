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

          {/* Normal User Category */}
          <Route path="/Category" element={<Category />} />

          {/* Admin Category */}
          <Route
            path="/Admin/Category"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <Category />
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
