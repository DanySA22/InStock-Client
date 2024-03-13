function WareHouseListSelection() {
  return (
    <>
      <div className="ware-house-list-selection">
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">WAREHOUSE</h4>
            <button className="ware-house-list-selection__button">
              Manhattan
            </button>
            <button className="ware-house-list-selection__icon">.</button>
          </div>
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">ADDRESS</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--address">
            503 Broadway, New York, USA
            </p>
          </div>
        </div>
        <div className="ware-house-list-selection__container">
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title">CONTACT NAME</h4>
            <p className="ware-house-list-selection__info ware-house-list-selection__info--name">
            Parmin Aujla
            </p>
          </div>
          <div className="ware-house-list-selection__subcontainer">
            <h4 className="ware-house-list-selection__title ware-house-list-selection__info--info">CONTACT INFORMATION</h4>
            <p className="ware-house-list-selection__info">
            +1 (629) 555-0129 paujla@instock.com
            </p>
          </div>
        </div>
        <div className="ware-house-list-selection__action">
          <button className="ware-house-list-selection__delete">delete</button>
          <button className="ware-house-list-selection__edit">e</button>
        </div>
      </div>
    </>
  );
}

export default WareHouseListSelection;
