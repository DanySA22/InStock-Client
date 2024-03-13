import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Calling the stylesheet
import "../src/styles/App.scss";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WareHousesPage from "./pages/WareHousesPage/WareHousesPage";
import AddWareHousePage from "./pages/AddWareHousePage/AddWareHousePage";
import EditWareHousePage from "./pages/EditWareHousePage/EditWareHousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WareHousesPage />} />
        <Route path="/addWareHouse" element={<AddWareHousePage />} />
        <Route path="/editWareHouse" element={<EditWareHousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/addInventory" element={<AddInventoryPage />} />
        <Route path="/editInventory" element={<EditInventoryPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
