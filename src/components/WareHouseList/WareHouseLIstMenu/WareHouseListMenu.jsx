import { NavLink } from "react-router-dom"
function WareHouseListMenu() {
  return (
    <>
      <header className="warehouse-list-menu">
        <h1 className="warehouse-list-menu__header">Warehouses</h1>
        <form className="warehouse-list-menu__form">
          <div className="warehouse-list-menu__container">
            <input type="text" id="search" className="warehouse-list-menu__search-bar" required placeholder="Search..."></input>
            <NavLink className="warehouse-list-menu__link" to="/addWareHouse">
              <button className="warehouse-list-menu__button" type="submit">
                + Add New Warehouse
              </button>
            </NavLink>
          </div>
        </form>
      </header>
    </>
  )
}
export default WareHouseListMenu
