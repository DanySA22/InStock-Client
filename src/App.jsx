import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//Calling the stylesheet
import "../src/styles/App.scss"
import InventoryPage from "./pages/InventoryPage/InventoryPage"
import WareHousesPage from "./pages/WareHousesPage/WareHousesPage"
import AddWareHousePage from "./pages/AddWareHousePage/AddWareHousePage"
import EditWareHousePage from "./pages/EditWareHousePage/EditWareHousePage"
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage"
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage"
import WareHouseDetailsPage from "./pages/WareHouseDetailsPage/WareHouseDetailsPage"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import InventoryPageDetail from "./pages/InventoryPageDetail/InventoryPageDetail"
function App() {
  return (
    <BrowserRouter className="browser">
      <Header />
      <Routes>
        <Route className="browser__warehousepage" path="/" element={<WareHousesPage />} />
        <Route className="browser__warehousepage" path="/warehouse/:id" element={<WareHousesPage />} />
        <Route path="/addWareHouse" element={<AddWareHousePage />} />
        <Route path="/editWareHouse" element={<EditWareHousePage />} />
        <Route path="/editWarehouse/:id" element={<EditWareHousePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/addInventory" element={<AddInventoryPage />} />
        <Route path="/inventory/editInventory/:id" element={<EditInventoryPage />} />
        <Route path="/wareHouseDetails/:id" element={<WareHouseDetailsPage />} />
        {/* <Route path="/inventorydetails/:id" element={<InventoryPageDetail />} /> */}
        <Route path="/inventory/inventorydetails/:id" element={<InventoryPageDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App