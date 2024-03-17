import arrowIcon from "../../../assets/Icons/arrow_back-24px.svg"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom";

const EditWareHouseHeader = ({ title }) => {
const { id } = useParams(); 
  return (
    <section className="edit-whsheader">
      <NavLink to={`/wareHouseDetails/${id}`}className="edit-whsheader__arrow-back">
        <img src={arrowIcon} alt="Go back" className="edit-whsheader__buttonicon" />
      </NavLink>
      <div className="edit-whsheader__title">{title}</div>
    </section>
  )
}
export default EditWareHouseHeader
