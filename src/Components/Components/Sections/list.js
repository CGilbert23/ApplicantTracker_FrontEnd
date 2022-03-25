import { parseDate} from "../Utils/index";
import {color_red_recruiter,color_yellow_recruiter,color_red_testing,color_yellow_testing,
color_red_interview,color_yellow_interview,color_red_background,color_yellow_background,
color_red_drug, color_yellow_drug, color_red_paperwork,color_yellow_paperwork} from "../Utils/constants"
import agg from "../Utils/agg";

function List({ cut, data, handleDelete, handleUpdateForm }) {
  /*CURRENT DATE*/
  const currentDate = new Date();

  /*CONDITIONAL FORMATTING FOR VARIANCES*/


  /* AGGREGATES */
  /* 
  const recruiterscreen_avg = agg.recruiterscreen(data, cut);
  const testing_avg = agg.testing(data, cut);
  const interview_avg = agg.interview(data, cut);
  const backgroundcheck_avg = agg.backgroundcheck(data, cut);
  const drugscreen_avg = agg.drugscreen(data, cut);
  const paperwork_avg = agg.paperwork(data, cut);*/
  const completion_avg = agg.completion(data, cut);

  /*DISTRIBUTE DATA BY APPLICANT LOCATION*/
  const storeTable = data.filter((item) => item.store === cut && item.overall_completion_var < 25);

  const table = storeTable.map(
    (
      {
        applicant_id,
        store,
        first_name,
        last_name,
        position,
        date_in,

        recruiterscreen_status,
        interview_status,
        backgroundcheck_status,
        drugscreen_status,
        testing_status,
        paperwork_status,

        recruiterscreen_var,
        testing_var,
        interview_var,
        backgroundcheck_var,
        paperwork_var,
        drugscreen_var,
        overall_completion_var,
      },
      index
    ) => (
      <tr>
        <td className="row-longbox" key={applicant_id}>
          {cut}
        </td>
        <td className="row-longbox">{first_name + " " + last_name}</td>
        <td className="row-medbox">{position}</td>
        <td className="row-shortbox">{recruiterscreen_status}</td>
        <td className="row-shortbox">{testing_status}</td>
        <td className="row-shortbox">{interview_status}</td>
        <td className="row-shortbox">{backgroundcheck_status}</td>
        <td className="row-shortbox">{drugscreen_status}</td>
        <td className="row-shortbox">{paperwork_status}</td>
        <td className="row-medbox-center">{parseDate(date_in)}</td>

        <td className="row-shortbox-center">
          <button
            className={"click"}
            onClick={() =>
              handleUpdateForm(
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
              )
            }
          >
            Update
          </button>
        </td>
        <td className="row-shortbox-center">
          <button
            className={"click"}
            onClick={() => handleDelete(applicant_id, store)}
          >
            Delete
          </button>
        </td>

        <td className="placeholder-td"></td>
        <td
          className={
            !recruiterscreen_var
              ? "none"
              : recruiterscreen_var > color_red_recruiter
              ? "red"
              : recruiterscreen_var > color_yellow_recruiter
              ? "yellow"
              : "green"
          }
        >
          {recruiterscreen_var != null ? recruiterscreen_var : "--"}
        </td>
        <td
          className={
            !testing_var
              ? "none"
              : testing_var > color_red_testing
              ? "red"
              : testing_var > color_yellow_testing
              ? "yellow"
              : "green"
          }
        >
          {testing_var !=null ? testing_var : "--"}
        </td>
        <td
          className={
            !interview_var
              ? "none"
              : interview_var > color_red_interview
              ? "red"
              : interview_var > color_yellow_interview
              ? "yellow"
              : "green"
          }
        >
          {interview_var != null ? interview_var : "--"}
        </td>
        <td
          className={
            !backgroundcheck_var
              ? "none"
              : backgroundcheck_var > color_red_background
              ? "red"
              : backgroundcheck_var > color_yellow_background
              ? "yellow"
              : "green"
          }
        >
          {backgroundcheck_var != null ? backgroundcheck_var : "--"}
        </td>
        <td
          className={
            !drugscreen_var
              ? "none"
              : drugscreen_var > color_red_drug
              ? "red"
              : drugscreen_var > color_yellow_drug
              ? "yellow"
              : "green"
          }
        >
          {drugscreen_var != null ? drugscreen_var : "--"}
        </td>
        <td
          className={
            !paperwork_var
              ? "none"
              : paperwork_var > color_red_paperwork
              ? "red"
              : paperwork_var > color_yellow_paperwork
              ? "yellow"
              : "green"
          }
        >
          {paperwork_var != null ? paperwork_var : "--"}
        </td>

        <td className="placeholder-td"></td>

        <td
          className={
            !overall_completion_var
              ? "none"
              : overall_completion_var > color_red_paperwork
              ? "red"
              : overall_completion_var > color_yellow_paperwork
              ? "yellow"
              : "green"
          }
        >
          {overall_completion_var != null ? overall_completion_var : "--"}
        </td>
      </tr>
    )
  );

  return (
    <div>
      <div>
        <h2 className="section-title">{cut}</h2>
        <p className="tableAvg">
          <i>
            {completion_avg >= 0 ? `Average Applicant Time To Completion: ${completion_avg}` : `No Applicants Completed`}
          </i>
        </p>
        <table className="route-table">
          <thead>
            <tr>
              <th>Store</th>
              <th>Applicant Name</th>
              <th>Position</th>
              <th>Recruiter Screen</th>
              <th>Employee Testing</th>
              <th>Manager Interview</th>
              <th>Background Check</th>
              <th>Drug Screen</th>
              <th>New Hire Paperwork</th>
              <th>Application Recieved</th>
              <th className="row-count">Update Applicant</th>
              <th className="row-count">Delete Applicant</th>

              <th className="placeholder-th"></th>

              <th className="row-count">Recruiter Screen Time</th>
              <th className="row-count">Testing Time</th>
              <th className="row-count">Interview Time</th>
              <th className="row-count">Background Check Time</th>
              <th className="row-count">Drug Screen Time</th>
              <th className="row-count">Paperwork Time</th>

              <th className="placeholder-th"></th>

              <th className="row-count-long">
                <i>Overall Completion Time</i>
              </th>
            </tr>
          </thead>
          <tbody> {table}</tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
