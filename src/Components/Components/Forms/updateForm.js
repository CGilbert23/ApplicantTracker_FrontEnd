import { useState } from "react";

/*CHECK FOR USER INPUT BEFORE SUBMIT*/


const UpdateForm = ({
  selectedApplicant,
  selectedApplicantName,
  handleUpdate,
  handleStatusChange,
  statusData,
  setShowUpdateForm,
  showUpdateForm
}) => {

  return (
    <div>
      <div>
        <h3 className="update-header">Update Applicant: {selectedApplicantName}</h3>

        <table className="route-table">
          <thead>
            <tr>
              <th>Store</th>
              <th>Recruiter Screen</th>
              <th>Employee Testing</th>
              <th>Manager Interview</th>
              <th>Background Check</th>
              <th>Drug Screen</th>
              <th>New Hire Paperwork</th>
              <th className="placeholder-th"></th>
              <th className="row-shortbox-center">Update</th>
              <th className="row-shortbox-center">Close</th>
            </tr>
          </thead>
          <tbody>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="store"
                name="store"
              >
                <option value="">{statusData.store}</option>
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
            </td>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="recruiterscreen_status"
                name="recruiterscreen_status"
              >
                <option value="">{statusData.recruiterscreen_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="testing_status"
                name="testing_status"
              >
                <option value="">{statusData.testing_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="interview_status"
                name="interview_status"
              >
                <option value="">{statusData.interview_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td className="row-shortbox">
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="backgroundcheck_status"
                name="backgroundcheck_status"
              >
                <option value="">{statusData.backgroundcheck_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td>
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="drugscreen_status"
                name="drugscreen_status"
              >
                <option value="">{statusData.drugscreen_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td className="row-shortbox">
              {" "}
              <select
                onChange={(event) =>
                  handleStatusChange(event, selectedApplicant)
                }
                className="update-form-dropdown"
                id="paperwork_status"
                name="paperwork_status"
              >
                <option value="">{statusData.paperwork_status}</option>
                <option value="Complete"> Complete</option>
                <option value="Scheduled"> Scheduled </option>
                <option value="Incomplete"> Incomplete </option>
              </select>
            </td>
            <td className="placeholder-td"></td>
            <td className="row-shortbox-center">
              <button
                className="update-click"
                type="submit"
                onClick={() => handleUpdate(selectedApplicant)}
              >
                Submit
              </button>
            </td>
            <td className="row-shortbox-center">
              <button
                className="close-click"
                type="submit"
                onClick={(showUpdateForm) => setShowUpdateForm(!showUpdateForm)}
              >
                X
              </button>
            </td>
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default UpdateForm;
