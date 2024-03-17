function InventoryHouseListSubMenu({ a, b, c, d, e, f }) {
  return (
    <div className="inventory-list-sub-menu">
      <div className="inventory-list-sub-menu__container">
        <div className="inventory-list-sub-menu__subcontainer">
          <h4 className="inventory-list-sub-menu__title inventory-list-sub-menu__title--item">
            {a}
          </h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--category">
          <h4 className="inventory-list-sub-menu__title inventory-list-sub-menu__title--category">
            {b}
          </h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="inventory-list-sub-menu__container inventory-list-sub-menu__container--qty">
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--status">
          <h4 className="inventory-list-sub-menu__title inventory-list-sub-menu__title--status">
            {c}
          </h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--qty">
          <h4 className="inventory-list-sub-menu__title inventory-list-sub-menu__title--qty">
            {d}
          </h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--warehouse">
          <div className="inventory-list-sub-menu__subcontainer">
            <h4 className="inventory-list-sub-menu__title inventory-list-sub-menu__title--warehouse">
              {e}
            </h4>
            <button className="inventory-list-sub-menu__icon"></button>
          </div>
        </div>
      </div>
      <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__action">
        <h4 className="inventory-list-sub-menu__title">{f}</h4>
      </div>
    </div>
  );
}
export default InventoryHouseListSubMenu;
