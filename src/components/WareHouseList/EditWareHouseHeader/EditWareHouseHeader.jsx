import arrowIcon from "../../../assets/Icons/arrow_back-24px.svg"
import { NavLink } from "react-router-dom"

const EditWareHouseHeader = ({ title }) => {
  return (
    <section className="edit-whsheader">
      <NavLink to="/" className="edit-whsheader__arrow-back">
        <img src={arrowIcon} alt="Go back" className="edit-whsheader__buttonicon" />
      </NavLink>
      <div className="edit-whsheader__title">{title}</div>
    </section>
  )
}

export default EditWareHouseHeader
