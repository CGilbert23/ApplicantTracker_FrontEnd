import { useState } from "react";

/*CHECK FOR USER INPUT BEFORE SUBMIT*/
const handleDisable = (formData) => {
  if (
    formData.first_name &&
    formData.last_name &&
    formData.position &&
    formData.store &&
    formData.recruiterscreen_status &&
    formData.testing_status &&
    formData.interview_status &&
    formData.backgroundcheck_status &&
    formData.drugscreen_status &&
    formData.paperwork_status &&
    formData.date_in
  )
    return false;
  else return true;
};

const addForm = ({formData, handleFormChange, handleFormSubmit}) => {
  
  const checkDisable = handleDisable(formData);

  return (
    <div>
      <div>
        <label className="add-form-name">Add Applicant:</label>
      </div>
      <div className="add-form">
        <label className="add-form-label" htmlFor="first_name">
          First Name:
          <input
            size={12}
            type="text"
            id="first_name"
            name="first_name"
            onChange={handleFormChange}
            value={formData.first_name}
          ></input>
        </label>
        <label className="add-form-label" htmlFor="last_name">
          Last Name:
          <input
            size={12}
            type="text"
            id="last_name"
            name="last_name"
            onChange={handleFormChange}
            value={formData.last_name}
          ></input>
        </label>

        <label className="add-form-label" htmlFor="position">
          Position:
          <input
            size={12}
            type="text"
            id="position"
            name="position"
            onChange={handleFormChange}
            value={formData.position}
          ></input>
        </label>
        <label className="add-form-label" htmlFor="store">
          Store:
          <select
            className="add-form-dropdown"
            id="store"
            name="store"
            onChange={handleFormChange}
            value={formData.store}
          >
            <option value="">Select option</option>
            <option value="Autoexpress">Autoexpress</option>
            <option value="Autorent Doylestown">Autorent Doylestown</option>
            <option value="Autorent Langhorne">Autorent Langhorne</option>
            <option value="Carstar Boyertown">Carstar Boyertown</option>
            <option value="Carstar Doylestown">Carstar Doylestown</option>
            <option value="Carstar Flemington">Carstar Flemington</option>
            <option value="Carstar Langhorne">Carstar Langhorne</option>
            <option value="Carstar Mechanicsburg">Carstar Mechanicsburg</option>
            <option value="Carstar Newtown">Carstar Newtown</option>
            <option value="Cadillac / GMC">Cadillac / GMC</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="CDJR">CDJR</option>
            <option value="Detail Center">Detail Center</option>
            <option value="Ford Boyertown">Ford Boyertown</option>
            <option value="Ford Doylestown">Ford Doylestown</option>
            <option value="Ford Exton">Ford Exton</option>
            <option value="Ford Langhorne">Ford Langhorne</option>
            <option value="Ford Mechanicsburg">Ford Mechanicsburg</option>
            <option value="Ford Newtown">Ford Newtown</option>
            <option value="Ford West Chester">Ford West Chester</option>
            <option value="Hyundai Doylestown">Hyundai Doylestown</option>
            <option value="Hyundai Flemington">Hyundai Flemington</option>
            <option value="Hyundai Langhorne">Hyundai Langhorne</option>
            <option value="Kia Langhrone">Kia Langhorne</option>
            <option value="Kia Mechanicsburg">Kia Mechanicsburg</option>
            <option value="Management">Management</option>
            <option value="Nissan Doylestown">Nissan Doylestown</option>
            <option value="Nissan Flemington">Nissan Flemington</option>
            <option value="Parts Warehouse">Parts Warehouse</option>
            <option value="Subaru">Subaru</option>
            <option value="Toyota">Toyota</option>
            <option value="Volkswagen Doylestown">Volkswagen Doylestown</option>
            <option value="Volkswagen Devon">Volkswagen Devon</option>
          </select>
        </label>


        <label className="add-form-label" htmlFor="recruiterscreen_status">
          Recruiter Screen Status:
          <select
            className="add-form-dropdown"
            id="recruiterscreen_status"
            name="recruiterscreen_status"
            onChange={handleFormChange}
            value={formData.recruiterscreen_status}
          >
            <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
            
        
          </select>
        </label>
        <label className="add-form-label" htmlFor="testing_status">
          Employee Testing Status:
          <select
            className="add-form-dropdown"
            id="testing_status"
            name="testing_status"
            onChange={handleFormChange}
            value={formData.testing_status}
          >
           <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
          </select>
        </label>
        <label className="add-form-label" htmlFor="interview_status">
          Manager Interview Status:
          <select
            className="add-form-dropdown"
            id="interview_status"
            name="interview_status"
            onChange={handleFormChange}
            value={formData.interview_status}
          >
           <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
          </select>
        </label>
        <label className="add-form-label" htmlFor="backgroundcheck_status">
          Background Check Status:
          <select
            className="add-form-dropdown"
            id="backgroundcheck_status"
            name="backgroundcheck_status"
            onChange={handleFormChange}
            value={formData.backgroundcheck_status}
          >
            <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
          </select>
        </label>
        <label className="add-form-label" htmlFor="drugscreen_status">
          Drug Screen Status:
          <select
            className="add-form-dropdown"
            id="drugscreen_status"
            name="drugscreen_status"
            onChange={handleFormChange}
            value={formData.drugscreen_status}
          >
            <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
          </select>
        </label>

        <label className="add-form-label" htmlFor="paperwork_status">
          New Hire Paperwork Status:
          <select
            className="add-form-dropdown"
            id="paperwork_status"
            name="paperwork_status"
            onChange={handleFormChange}
            value={formData.paperwork_status}
          >
           <option value="">Select an option</option>
            <option value="Incomplete"> Incomplete </option>
            <option value="Scheduled"> Scheduled </option>
            <option value="Complete"> Complete</option>
          </select>
        </label>
        <label className="add-form-label-long" htmlFor="date_in">
          App Recieved:
          <input
            type="date"
            id="date_in"
            name="date_in"
            onChange={handleFormChange}
            value={formData.date_in}
          ></input>
        </label>

        <label className="add-form-label">
          <button
            className="submit-btn"
            disabled={checkDisable}
            onClick={handleFormSubmit}
            type="submit"
          >
            Submit
          </button>
        </label>
      </div>
    </div>
  );
};

export default addForm;
