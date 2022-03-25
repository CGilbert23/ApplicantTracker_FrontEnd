import agg, { recruiterscreen } from "../Utils/agg";
import {
    color_red_background,
  color_red_drug,
  color_red_interview,
  color_red_paperwork,
  color_red_recruiter,
  color_red_testing,
  color_yellow_background,
  color_yellow_drug,
  color_yellow_interview,
  color_yellow_paperwork,
  color_yellow_recruiter,
  color_yellow_testing,
} from "../Utils/constants";

const AggTable = ({ data, TableList }) => {
  const table = TableList(data).map((element) => (
    <tr>
      <td>{element}</td>
      <td
        className={
          !agg.recruiterscreen(data, element)
            ? "none"
            : agg.recruiterscreen(data, element) > color_red_recruiter
            ? "red"
            : agg.recruiterscreen(data, element) > color_yellow_recruiter
            ? "yellow"
            : "green"
        }
      >
        {agg.recruiterscreen(data, element) >= 0
          ? agg.recruiterscreen(data, element)
          : "--"}
      </td>
      <td 
      className={
        !agg.testing(data, element)
          ? "none"
          : agg.testing(data, element) > color_red_testing
          ? "red"
          : agg.testing(data, element) > color_yellow_testing
          ? "yellow"
          : "green"
      }>
        {agg.testing(data, element) >= 0 ? agg.testing(data, element) : "--"}
      </td>

      <td className={
          !agg.interview(data, element)
            ? "none"
            : agg.interview(data, element) > color_red_background
            ? "red"
            : agg.interview(data, element) > color_yellow_background
            ? "yellow"
            : "green"
        }>
        {agg.interview(data, element) >= 0
          ? agg.interview(data, element)
          : "--"}
      </td>
     
      <td className={
          !agg.backgroundcheck(data, element)
            ? "none"
            : agg.backgroundcheck(data, element) > color_red_background
            ? "red"
            : agg.backgroundcheck(data, element) > color_yellow_background
            ? "yellow"
            : "green"
        }>
        {agg.backgroundcheck(data, element) >= 0
          ? agg.backgroundcheck(data, element)
          : "--"}
      </td>
      <td className={
          !agg.drugscreen(data, element)
            ? "none"
            : agg.drugscreen(data, element) > color_red_drug
            ? "red"
            : agg.drugscreen(data, element) > color_yellow_drug
            ? "yellow"
            : "green"
        }>
        {agg.drugscreen(data, element) >= 0
          ? agg.drugscreen(data, element)
          : "--"}
      </td>
      <td className={
          !agg.paperwork(data, element)
            ? "none"
            : agg.paperwork(data, element) > color_red_paperwork
            ? "red"
            : agg.paperwork(data, element) > color_yellow_paperwork
            ? "yellow"
            : "green"
        }>
        {agg.paperwork(data, element) >= 0 ? agg.paperwork(data, element) : "--"}
      </td>
      <td className="placeholder-td"></td>
      <td className={
          !agg.completion(data, element)
            ? "none"
            : agg.completion(data, element) > color_red_paperwork
            ? "red"
            : agg.completion(data, element) > color_yellow_paperwork
            ? "yellow"
            : "green"
        }>
        {agg.completion(data, element) >= 0
          ? agg.completion(data, element)
          : "--"}
      </td>
    </tr>
  ));

  return (
    <div>
      <table className="route-table">
        <thead>
          <th className="row-longbox">Store</th>
          <th className="row-count">Recruiter Scren Time</th>
          <th className="row-count">Testing Time</th>
          <th className="row-count">Interview Time</th>
          <th className="row-count">Background Check Time</th>
          <th className="row-count">Drug Screen Time</th>
          <th className="row-count">Paperwork Time</th>
          <th className="placeholder-th"></th>
          <th className="row-count">Overall Completion Time</th>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
};

export default AggTable;
