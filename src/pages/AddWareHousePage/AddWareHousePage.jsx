import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import EditWareHouseHeader from "../../components/WareHouseList/EditWareHouseHeader/EditWareHouseHeader"

const AddWareHousePage = () => {
  const title = "Add New WareHouse"
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [street, setStreet] = useState("")
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [contactName, setContactName] = useState(" ")
  const [position, setPosition] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState(" ")

  const [nameError, setNameError] = useState(false);
  const [streetError, setStreetError] = useState(false);
  const [cityError, setCityError] = useState("");
  const [countryError, setCountryError] = useState(false);
  const [contactNameError, setContactNameError] = useState(false);
  const [positionError, setPositionError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  /// Example regex for a 10-digit phone number
  const phoneRegex = /^[0-9]{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for a basic email format

  const validateInputs = () => {
    let isValid = true;
    if (!name.trim()) {
      setNameError(true);
      isValid = false;
    }
    if (!street.trim()) {
      setStreetError(true);
      isValid = false;
    }
    if (!city.trim()) {
      setCityError(true);
      isValid = false;
    }
    if (!country.trim()) {
      setCountryError(true);
      isValid = false;
    }
    if (!contactName.trim()) {
      setContactNameError(true);
      isValid = false;
    }
    if (!position.trim()) {
      setPositionError(true);
      isValid = false;
    }
    if (!phone.trim() || !phone.match(phoneRegex)) {
      setPhoneError(true);
      isValid = false;
    }
    if (!email.trim() || !email.match(emailRegex)) {
      setEmailError(true);
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    const body = {
      id: null,
      warehouse_name: name,
      address: street,
      city: city,
      country: country,
      contact_name: contactName,
      contact_position: position,
      contact_phone: phone,
      contact_email: email
    }
    try {
      await axios.post("http://localhost:8080/warehouses", body)
      // Clear form fields after successful submission
      setName("");
      setStreet("");
      setCity("");
      setCountry("");
      setContactName("");
      setPosition("");
      setPhone("");
      setEmail("");

      // Redirect to home page after successful submission
      navigate("/");
    } catch (error) {
      console.log("Error submitting the form", error);
    }
  };

  const handleInputChange = (setter, setError) => (e) => {
    setter(e.target.value);
    setError(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      {<EditWareHouseHeader title={title} />}
      <div className="warehouse">
        <form onSubmit={handleSubmit} className="warehouse__container">
          <div className="warehouse__details">
            <div className="warehouse__divideone"></div>
            <div className="warehouse__left">
              <h2 className="warehouse__title">Warehouse Details</h2>
              <div className="warehouse__items">
                <label className="warehouse__labels" htmlFor="name">
                  Warehouse Name
                </label>
                <input onChange={handleInputChange(setName, setNameError)} className={`warehouse__inputs ${nameError ? "error" : ""}`} type="text" id="name" name="name" placeholder="Warehouse Name" />
                {nameError && <p className="error-message">Name is required</p>}
                <label className="warehouse__labels" htmlFor="street">
                  Stress Address
                </label>
                <input onChange={handleInputChange(setStreet, setStreetError)} className={`warehouse__inputs ${streetError ? "error" : ""}`} type="text" id="street" name="street" placeholder="Street Address" />
                {streetError && <p className="error-message">Street is required</p>}
                <label className="warehouse__labels" htmlFor="city">
                  City
                </label>
                <input onChange={handleInputChange(setCity, setCityError)} className={`warehouse__inputs ${cityError ? "error" : ""}`} type="text" id="city" name="city" placeholder="City" />
                {cityError && <p className="error-message">City is required</p>}
                <label className="warehouse__labels" htmlFor="country">
                  Country
                </label>
                <input onChange={handleInputChange(setCountry, setCountryError)} className={`warehouse__inputs ${countryError ? "error" : ""}`} type="text" id="country" name="country" placeholder="Country" />
                {countryError && <p className="error-message">Country is required</p>}
              </div>
            </div>
            <div className="warehouse__dividetwo"></div>
            <div className="warehouse__right">
              <h2 className="warehouse__title">Contact Details</h2>
              <div className="warehouse__items">
                <label className="warehouse__labels" htmlFor="contactName">
                  Contact Name
                </label>
                <input onChange={handleInputChange(setContactName, setContactNameError)} className={`warehouse__inputs ${contactNameError ? "error" : ""}`} type="text" id="contactName" name="contactName" placeholder="Contact Name" />
                {contactNameError && <p className="error-message">Contact name is required</p>}
                <label className="warehouse__labels" htmlFor="position">
                  Position
                </label>
                <input onChange={handleInputChange(setPosition, setPositionError)} className={`warehouse__inputs ${positionError ? "error" : ""}`} type="text" id="position" name="position" placeholder="Position" />
                {positionError && <p className="error-message">Position is required</p>}
                <label className="warehouse__labels" htmlFor="phone">
                  Phone
                </label>
                <input onChange={handleInputChange(setPhone, setPhoneError)} className={`warehouse__inputs ${phoneError ? "error" : ""}`} type="tel" id="phone" name="phone" placeholder="Phone Number" />
                {phoneError && <p className="error-message">Please enter 10-digit phone number</p>}
                <label className="warehouse__labels" htmlFor="email">
                  Email
                </label>
                <input onChange={handleInputChange(setEmail, setEmailError)} className={`warehouse__inputs ${emailError ? "error" : ""}`} type="email" id="email" name="email" placeholder="Email" />
                {emailError && <p className="error-message">Email is required</p>}
              </div>
            </div>
          </div>
          <div className="warehouse__buttons">
            <button onClick={handleCancel} className="warehouse__buttons-cancel" type="submit">
              Cancel
            </button>
            <button className="warehouse__buttons-add" type="submit">
              + Add Warehouse
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddWareHousePage;
