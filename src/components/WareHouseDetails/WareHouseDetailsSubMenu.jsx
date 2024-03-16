function WareHouseDetailsSubMenu ({ a, b, c, d, e, f }){
  return (
    <div className="related-items-list-sub-menu">
      <div className="related-items-list-sub-menu__container">
        <div className="related-items-list-sub-menu__subcontainer">
          <h4 className="related-items-list-sub-menu__title related-items-list-sub-menu__title--item">{a}</h4>
          <button className="related-items-list-sub-menu__icon"></button>
        </div>
        <div className="related-items-list-sub-menu__subcontainer related-items-list-sub-menu__subcontainer--category">
          <h4 className="related-items-list-sub-menu__title related-items-list-sub-menu__title--category">
            {b}
          </h4>
          <button className="related-items-list-sub-menu__icon"></button>
        </div>
        <div className="related-items-list-sub-menu__subcontainer related-items-list-sub-menu__subcontainer--status">
          <h4 className="related-items-list-sub-menu__title related-items-list-sub-menu__title--status">
            {c}
          </h4>
          <button className="related-items-list-sub-menu__icon"></button>
        </div>
      </div>
      <div className="related-items-list-sub-menu__container related-items-list-sub-menu__container--qty">
        <div className="related-items-list-sub-menu__subcontainer related-items-list-sub-menu__subcontainer--qty">
          <h4 className="related-items-list-sub-menu__title related-items-list-sub-menu__title--qty">
            {d}
          </h4>
          <button className="related-items-list-sub-menu__icon"></button>
        </div>
        <div className="related-items-list-sub-menu__subcontainer related-items-list-sub-menu__action">
          <h4 className="related-items-list-sub-menu__title">{f}</h4>
        </div>
      </div>
    </div>
  )
}

export default WareHouseDetailsSubMenu