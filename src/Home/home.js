import { useState } from "react";
import useFetch from "../Components/Components/Fetch/fetch";
import List from "../Components/Components/Sections/list";
import Intro from "../Components/Components/Sections/intro";
import SearchForm from "../Components/Components/Forms/searchForm";
import AddForm from "../Components/Components/Forms/addForm";
import UpdateForm from "../Components/Components/Forms/updateForm";
import { parseDate } from "../Components/Components/Utils/index";
import SumFetch from "../Components/Components/Utils/agg";
import ExportReactCSV from "../Components/Components/Utils/exportCSV";
import Popup from "../Components/Components/Utils/popup";
import { userguide } from "../Components/Components/Utils/userguide";
import AggTable from "../Components/Components/Sections/agg";

const Home = () => {
  /* DATE & TIME FORMAT */
  var today = new Date();
  const displaytime = parseDate(today);

  /*INITIAL STATE*/
  const { apps, setApps, isPending } = useFetch(
    `http://10.12.248.173:5000/api/applicants`
  );

  /*REFRESH FUNCTION*/
  const refresh = () => {
    window.location.reload(true);
  };

  /*LIST OF ACTIVE STORES*/
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const TableList = (apps) => {
    const list = apps.map((element) => element.store);
    const uniquelist = list.filter(unique).sort();
    return uniquelist;
  };






  /*NEW VEHICLE FORM: TRACK FORM DISPLAY*/
  const [showAddForm, setShowAddForm] = useState(false);

  /*NEW VEHICLE FORM: TOGGLE FORM DISPLAY*/
  const handleAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  /*NEW VEHICLE FORM: POST REQUEST, DECLARING STATE*/
  const initialFormState = {
    store: "",
    first_name: "",
    last_name: "",
    position: "",
    recruiterscreen_status: "",
    testing_status: "",
    interview_status: "",
    backgroundcheck_status: "",
    drugscreen_status: "",
    paperwork_status: "",
    date_in: "",
    currentdate: displaytime,
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  /*NEW VEHICLE FORM: POST REQUEST, UPDATING STATE TO USER INPUT*/
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /*NEW VEHICLE FORM: POST REQUEST, UPDATE STATE AND TRIGGER RE-RENDER*/
  const confirmpost = (applicant) => {
    setApps([...apps, applicant]);
  };

  /*NEW VEHICLE FORM: POST REQUEST, SUBMIT TO SERVER*/
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const applicant = formData;
    fetch(`http://10.12.248.173:5000/api/applicants`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicant),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(`Added Successfully: ${response}`);
        return response;
      })
      .then((applicant) => confirmpost(applicant))
      .then(() => handleAddForm())
      .then(() => refresh())
      .catch((error) => console.log("Form submit error", error));

    setFormData({ ...initialFormState });
  };






  /*DELETE APPLICANT: UPDATE STATE< TRIGGER RE-RENDER*/
  const deleteApplicant = (id) => {
    const updatedTable = apps.filter((item) => item.applicant_id != id);
    setApps(updatedTable);
  };

  /*DELETE APPLICANT: SERVER REQUEST*/
  const handleDelete = (id, stock) => {
    fetch(`http://10.12.248.173:5000/api/applicants/${id}`, {
      method: "DELETE",
    })
      .then((response) => console.log("Deleted Applicant"))
      .then(() => deleteApplicant(id));
  };






  /*UPDATE FORM: TOGGLE FORM DISPLAY*/
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  /*UPDATE FORM: TRACK STATE OF USER SELECTED*/
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [selectedApplicantName, setSelectedApplicantName] = useState(null);

  /*UPDATE FORM: TRACK STATE OF USER SELECTED*/
  const initialStatusState = {
    store: null,
    recruiterscreen_status: null,
    testing_status: null,
    interview_status: null,
    backgroundcheck_status: null,
    drugscreen_status: null,
    paperwork_status: null,
  };

  const [statusData, setStatusData] = useState({ ...initialStatusState });

  /*UPDATE FORM: PASS IN CURRENT USER STATE && TOGGLE FORM ON USER CLICK*/
  const handleUpdateForm = (
    applicant_id,
    store,
    first_name,
    last_name,
    recruiterscreen_status,
    testing_status,
    interview_status,
    backgroundcheck_status,
    drugscreen_status,
    paperwork_status
  ) => {
    setShowUpdateForm(!showUpdateForm);
    setSelectedApplicant(applicant_id);
    setSelectedApplicantName(first_name + " " + last_name);
    setStatusData({
      store: store,
      recruiterscreen_status: recruiterscreen_status,
      testing_status: testing_status,
      interview_status: interview_status,
      backgroundcheck_status: backgroundcheck_status,
      drugscreen_status: drugscreen_status,
      paperwork_status: paperwork_status,
    });
    window.scroll(0, 10);
   
  };

  /*UPDATE FROM: UPDATE STATE TO USER INPUT*/
  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    setStatusData({
      ...statusData,
      [name]: value,
    });
  };

  /*UPDATE FORM: SUMBIT UPDATE TO SERVER*/
  const handleUpdate = (id) => {
    fetch(`http://10.12.248.173:5000/api/applicants/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(statusData),
    })
      .then((response) => response.json())
      .then(() => confirmUpdate(id))
      .then(() => refresh());

    setStatusData({ ...initialStatusState });
  };

  /*UPDATE FORM: UPDATE STATE TRIGGER RE-RENDER*/
  const confirmUpdate = (id) => {
    const updatedTable = apps.map((item) =>
      item.applicant_id != id
        ? item
        : {
            ...item,
            store: statusData.store,
            overall_status: statusData.overall_status,
            recruiterscreen_status: statusData.recruiterscreen_status,
            testing_status: statusData.testing_status,
            interview_status: statusData.interview_status,
            backgroundcheck_status: statusData.backgroundcheck_status,
            drugscreen_status: statusData.drugscreen_status,
            paperwork_status: statusData.paperwork_status,
            notes: statusData.notes,
          }
    );
    setApps(updatedTable);
    handleUpdateForm(id);
  };

 /* POPUP USER GUIDE */

   const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  /*OUTPUT*/
  return (
    <div>

<div>
    <input
      type="button"
      value="User Guide"
      onClick={togglePopup}
    />
    {isOpen ? <Popup
      content={<>
       {userguide}
      </>}
      handleClose={togglePopup}
    />: null}
  </div>


      <ExportReactCSV csvData={apps} fileName={`ApplicantsTracker_${displaytime}`} />

      <Intro displaytime={displaytime} SumFetch={SumFetch} />

      <div className="add-applicant">
        <button className="add-applicant-btn" onClick={handleAddForm}>
          Add Applicant
        </button>
      </div>
      <SearchForm data={apps} setData={setApps} />

      {showAddForm ? (
        <AddForm
          formData={formData}
          setFormData={setFormData}
          handleFormChange={handleFormChange}
          handleFormSubmit={handleFormSubmit}
        />
      ) : null}

      {showUpdateForm ? (
        <UpdateForm
          data={apps}
          selectedApplicant={selectedApplicant}
          selectedApplicantName={selectedApplicantName}
          handleUpdateForm={handleUpdateForm}
          statusData={statusData}
          handleStatusChange={handleStatusChange}
          handleUpdate={handleUpdate}
          showUpdateForm={showUpdateForm}
          setShowUpdateForm={setShowUpdateForm}
        />
      ) : null}

      <hr></hr>

      {!isPending ? (
        TableList(apps).map((element) => (
          <div>
            {" "}
            <List
              cut={element}
              data={apps}
              isPending={isPending}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
              handleStatusChange={handleStatusChange}
              showUpdateForm={showUpdateForm}
              handleUpdateForm={handleUpdateForm}
              displaytime={displaytime}
            />
          </div>
        ))
      ) : (
        <div>Loading</div>
      )}

<hr></hr>
    <hr></hr>

    {!isPending ? (
      
      <h3 className="agg-name">Aggregate Completion Times By Store (In Days)</h3>
      ) : null
    }    
    

    {!isPending ? (
      <div>
      <AggTable data={apps} TableList={TableList}/>
    </div> ) : null
    }

    </div>
  );
};

export default Home;
