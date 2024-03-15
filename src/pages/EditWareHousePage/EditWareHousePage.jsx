import EditWareHouseHeader from "../../components/WareHouseList/EditWareHouseHeader/EditWareHouseHeader";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EditWareHousePage() {
  const { id: warehouseId } = useParams();
  const navigate = useNavigate();

  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?([0-9]{1,3})?([ .-]?[0-9]{2,4}){2,3}$/;
    tempErrors.warehouseName = warehouseName
      ? ""
      : "Warehouse name is required.";
    tempErrors.address = address ? "" : "Address is required.";
    tempErrors.city = city ? "" : "City is required.";
    tempErrors.country = country ? "" : "Country is required.";
    tempErrors.contactName = contactName ? "" : "Contact name is required.";
    tempErrors.contactPosition = contactPosition ? "" : "Position is required.";
    tempErrors.contact_email = emailRegex.test(contactEmail)
      ? ""
      : "Email is invalid.";
    tempErrors.contact_phone = phoneRegex.test(contactPhone)
      ? ""
      : "Phone number is invalid.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const url = `http://localhost:8081/warehouses/${warehouseId}`;
      try {
        const response = await axios.put(url, {
          warehouse_name: warehouseName,
          address,
          city,
          country,
          contact_name: contactName,
          contact_position: contactPosition,
          contact_phone: contactPhone,
          contact_email: contactEmail,
        });
        console.log(response.data);
        navigate("/"); // Redirect to the home page or appropriate page
      } catch (error) {
        console.error("Error updating warehouse", error);
      }
    }
  };

  const handleCancel = () => {
    navigate("/");
  };
  const title = "Edit Warehouse";
  return (
    <section className="warehouse-header">
      <EditWareHouseHeader title={title} />
      <form className="edit-warehouse" onSubmit={handleSubmit}>
        <div className="edit-warehouse__container">
          <div className="edit-warehouse__divideone"></div>
          <div className="edit-warehouse__section edit-warehouse__section--warehouse-details">
            <div className="edit-warehouse__header">Warehouse Details</div>
            <label
              htmlFor="warehouse_name"
              className="edit-warehouse__labeltwo"
            >
              Warehouse Name
            </label>
            <input
              id="warehouse_name"
              name="warehouse_name"
              type="text"
              placeholder="Washington"
              value={warehouseName}
              onChange={(e) => setWarehouseName(e.target.value)}
              className={`edit-warehouse__input ${
                errors.warehouseName ? "input-error" : ""
              }`}
            />

            <label htmlFor="address" className="edit-warehouse__labeltwo">
              Street Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              placeholder="33 Pearl Street SW"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`edit-warehouse__input ${
                errors.address ? "input-error" : ""
              }`}
            />

            <label htmlFor="city" className="edit-warehouse__labeltwo">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Washington"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`edit-warehouse__input ${
                errors.city ? "input-error" : ""
              }`}
            />

            <label htmlFor="country" className="edit-warehouse__labeltwo">
              Country
            </label>
            <input
              id="country"
              name="country"
              type="text"
              placeholder="USA"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className={`edit-warehouse__input ${
                errors.country ? "input-error" : ""
              }`}
            />
          </div>

          <div className="edit-warehouse__divide"></div>

          <div className="edit-warehouse__section edit-warehouse__section--contact-details">
            <div className="edit-warehouse__header-contact ">
              Contact Details
            </div>
            <label htmlFor="contact_name" className="edit-warehouse__labeltwo">
              Contact Name
            </label>
            <input
              id="contact_name"
              name="contact_name"
              type="text"
              placeholder="Graeme Lyon"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className={`edit-warehouse__input ${
                errors.contactName ? "input-error" : ""
              }`}
            />

            <label
              htmlFor="contact_position"
              className="edit-warehouse__labeltwo"
            >
              Position
            </label>
            <input
              id="contact_position"
              name="contact_position"
              type="text"
              placeholder="Warehouse Manager"
              value={contactPosition}
              onChange={(e) => setContactPosition(e.target.value)}
              className={`edit-warehouse__input ${
                errors.contactPosition ? "input-error" : ""
              }`}
            />

            <label
              htmlFor="contact_phone:"
              className="edit-warehouse__labeltwo"
            >
              Phone Number
            </label>
            <input
              id="contact_phone:"
              name="contact_phone:"
              type="text"
              placeholder="+1 (647) 504-0911"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              className={`edit-warehouse__input ${
                errors.contactPhone ? "input-error" : ""
              }`}
            />

            <label htmlFor="contact_email" className="edit-warehouse__labeltwo">
              Email
            </label>
            <input
              id="contact_email"
              name="contact_email"
              type="text"
              placeholder="glyon@instock.com"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className={`edit-warehouse__input ${
                errors.contactEmail ? "input-error" : ""
              }`}
            />
          </div>
        </div>
        <div className="edit-warehouse__two-buttons">
          <button
            type="button"
            onClick={handleCancel}
            className="edit-warehouse__buttonone"
          >
            Cancel
          </button>
          <button type="submit" className="edit-warehouse__button">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
export default EditWareHousePage;
