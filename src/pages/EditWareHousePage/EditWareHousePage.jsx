import EditWareHouseHeader from "../../components/WareHouseList/EditWareHouseHeader/EditWareHouseHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function EditWareHousePage() {
  const { id: warehouseId } = useParams();
  const navigate = useNavigate();

  console.log("params:", warehouseId);
  //usestate for the fields
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [errors, setErrors] = useState({});
  //function to set the selected warehouse in the form before editing
  useEffect(() => {
    const editWareHouseDetails = async () => {
      const url = `http://localhost:8080/warehouses/${warehouseId}`;
      try {
        const response = await axios.get(url);
        const { data } = response;
        setWarehouseName(data.warehouse_name);
        setAddress(data.address);
        setCity(data.city);
        setCountry(data.country);
        setContactName(data.contact_name);
        setContactPosition(data.contact_position);
        setContactPhone(data.contact_phone);
        setContactEmail(data.contact_email);
      } catch (error) {
        console.error("cannot get warehouse Details", error);
      }
    };
    editWareHouseDetails();
  }, [warehouseId]);

  //error checking
  const validate = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+[0-9]{1,3} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/;
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
    console.log("contactPhone", contactPhone);
    console.log(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };
  //function to update the warehouse
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    if (validate()) {
      const url = `http://localhost:8080/warehouses/${warehouseId}`;
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
        navigate("/");
      } catch (error) {
        console.error("Error updating warehouse", error);
      }
    } else {
      console.log("Validation fail");
    }
  };

  //cancle function to navigate back to the homepage
  const handleCancel = () => {
    navigate("/");
  };
  const title = "Edit Warehouse";
  const editInventoryTitle = "";
  return (
    <section className="warehouse-header">
      <EditWareHouseHeader title={title} warehouseId={warehouseId} />
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
              placeholder="washington"
              value={warehouseName}
              onChange={(e) => setWarehouseName(e.target.value)}
              className={`edit-warehouse__input ${
                errors.warehouseName ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.warehouseName && (
              <div className="edit-warehouse__errortwo">
                {errors.warehouseName}
              </div>
            )}
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
                errors.address ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.address && (
              <div className="edit-warehouse__errortwo">{errors.address}</div>
            )}
            <label htmlFor="city" className="edit-warehouse__labeltwo">
              City
            </label>
            <input
              id="city"
              name="city"
              type="text"
              placeholder={"Washington"}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className={`edit-warehouse__input ${
                errors.city ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.city && (
              <div className="edit-warehouse__errortwo">{errors.city}</div>
            )}
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
                errors.country ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.country && (
              <div className="edit-warehouse__errortwo">{errors.country}</div>
            )}{" "}
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
                errors.contactName ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.contactName && (
              <div className="edit-warehouse__errortwo">
                {errors.contactName}
              </div>
            )}
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
                errors.contactPosition ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.contactPosition && (
              <div className="edit-warehouse__errortwo">
                {errors.contactPosition}
              </div>
            )}
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
                errors.contact_phone ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.contact_phone && (
              <div className="edit-warehouse__errortwo">
                {errors.contact_phone}
              </div>
            )}

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
                errors.contact_email ? "edit-warehouse__error" : ""
              }`}
            />
            {errors.contact_email && (
              <div className="edit-warehouse__errortwo">
                {errors.contact_email}
              </div>
            )}
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
