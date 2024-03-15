
function WareHouseListSubMenu() {
  return (
    <div className="ware-house-list-sub-menu">
      <div className="ware-house-list-sub-menu__container">
        <div className="ware-house-list-sub-menu__subcontainer">
          <h4 className="ware-house-list-sub-menu__title">WAREHOUSE</h4>
          <button className="ware-house-list-sub-menu__icon"></button>
        </div>
        <div className="ware-house-list-sub-menu__subcontainer ware-house-list-sub-menu__subcontainer--address">
          <h4 className="ware-house-list-sub-menu__title">ADDRESS</h4>
          <button className="ware-house-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="ware-house-list-sub-menu__container ware-house-list-sub-menu__container--contact">
        <div className="ware-house-list-sub-menu__subcontainer">
          <h4 className="ware-house-list-sub-menu__title ware-house-list-sub-menu__title--name">CONTACT NAME</h4>
          <button className="ware-house-list-sub-menu__icon"></button>
        </div>
        <div className="ware-house-list-sub-menu__subcontainer ware-house-list-sub-menu__subcontainer--info">
          <h4 className="ware-house-list-sub-menu__title">
            CONTACT INFORMATION
          </h4>
          <button className="ware-house-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="ware-house-list-sub-menu__subcontainer ware-house-list-sub-menu__action">
        <h4 className="ware-house-list-sub-menu__title">ACTION</h4>
      </div>
    </div>
  );
}
export default WareHouseListSubMenu;
