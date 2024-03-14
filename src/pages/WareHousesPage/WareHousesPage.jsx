import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu";
import WareHouseListSelection from "../../components/WareHouseList/WareHouseListSelection/WareHouseListSelection";
import WareHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/WareHouseListSubMenu";
import DeleteWareHousePopup from "../../components/WareHouseList/DeleteWareHouse/DeleteWareHouse";
function WareHousesPage() {

  return(
    <div className="warehousepage">
      <WareHouseListMenu />
      <WareHouseListSubMenu/>
      <WareHouseListSelection/>
      <DeleteWareHousePopup/>
    </div>
  );
}

export default WareHousesPage;
