import { NavLink } from "react-router-dom"
function WareHouseListMenu({ title, button, link }) {
  return (
    <>
      <header className="warehouse-list-menu">
        <h1 className="warehouse-list-menu__header">{title}</h1>
        <form className="warehouse-list-menu__form">
          <div className="warehouse-list-menu__container">
            <input type="text" id="search" className="warehouse-list-menu__search-bar" required placeholder="Search..."></input>
            <NavLink className="warehouse-list-menu__link" to={link}>
              <button className="warehouse-list-menu__button" type="submit">
                + {button}
              </button>
            </NavLink>
          </div>
        </form>
      </header>
    </>
  )
}
export default WareHouseListMenu
