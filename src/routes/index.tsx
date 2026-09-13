import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import Home from "@/pages/home";
import Order from "@/pages/order";
import { BrowserRouter, Route, Routes } from "react-router";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  )
}