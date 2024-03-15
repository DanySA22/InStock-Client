import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu"
import WareHouseListSelection from "../../components/WareHouseList/WareHouseListSelection/WareHouseListSelection"
import WareHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/WareHouseListSubMenu"
import DeleteWareHousePopup from "../../components/WareHouseList/DeleteWareHouse/DeleteWareHouse"
function WareHousesPage() {
  return (
    <div className="warehousepage">
      <WareHouseListMenu title={"Warehouses"} button={"Add New Warehouse"} link={"/addWareHouse"} />
      <WareHouseListSubMenu />
      <WareHouseListSelection />
      <DeleteWareHousePopup />
    </div>
  )
}

export default WareHousesPage
