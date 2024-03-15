const DeleteWareHousePopup = ({isOpen, onClose, children}) =>{
  return(
    <>
     {isOpen && (
        <div className="popup-overlay" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={onClose}>
              &times;
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

 export default DeleteWareHousePopup