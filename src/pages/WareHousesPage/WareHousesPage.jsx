import WareHouseListMenu from "../../components/WareHouseList/WareHouseLIstMenu/WareHouseListMenu";
import WareHouseListSelection from "../../components/WareHouseList/WareHouseListSelection/WareHouseListSelection";
import WareHouseListSubMenu from "../../components/WareHouseList/WareHouseListSubMenu/WareHouseListSubMenu";
function WareHousesPage() {
  return(
    <>
      <WareHouseListMenu />
      <WareHouseListSubMenu/>
      <WareHouseListSelection/>
    </>
  );
}

export default WareHousesPage;
