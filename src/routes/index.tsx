import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Home from "@/pages/home";
import Order from "@/pages/order";
import About from "@/pages/about";
import { ScrollToHash } from "@/utils/scroll-to-hash";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/pedido" element={<Order />} />
        <Route path="/sobre" element={<About />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}