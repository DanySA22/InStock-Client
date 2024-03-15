function InventoryHouseListSubMenu({ a, b, c, d, e, f }) {
  return (
    <div className="inventory-list-sub-menu">
      <div className="inventory-list-sub-menu__container">
        <div className="inventory-list-sub-menu__subcontainer">
          <h4 className="inventory-list-sub-menu__title">{a}</h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--address">
          <h4 className="inventory-list-sub-menu__title">{b}</h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="inventory-list-sub-menu__container inventory-list-sub-menu__container--contact">
        <div className="inventory-list-sub-menu__subcontainer">
          <h4 className="inventory-list-sub-menu__title">{c}</h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
        <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--info">
          <h4 className="inventory-list-sub-menu__title">{d}</h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__subcontainer--info">
        <div className="inventory-list-sub-menu__subcontainer">
          <h4 className="inventory-list-sub-menu__title">{e}</h4>
          <button className="inventory-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="inventory-list-sub-menu__subcontainer inventory-list-sub-menu__action">
        <h4 className="inventory-list-sub-menu__title">{f}</h4>
      </div>
    </div>
  )
}
export default InventoryHouseListSubMenu
