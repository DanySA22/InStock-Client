import EditWareHouseHeader from "../../components/WareHouseList/EditWareHouseHeader/EditWareHouseHeader";

function WareHouseDetailsPage(){
  console
  
  return (
    <>
    <section className="edit-whsheader">
      <NavLink to="/" className="edit-whsheader__arrow-back">
        <img
          src={arrowIcon}
          alt="Go back"
          className="edit-whsheader__buttonicon"
        />
      </NavLink>
      <div className="edit-whsheader__title">Edit Warehouse</div>
    </section>
    <div>warehouse Details2</div>
    </>
  )
}
export default WareHouseDetailsPage;