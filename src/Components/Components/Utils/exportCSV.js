import React from 'react'
import { CSVLink } from 'react-csv'

export const ExportReactCSV = ({csvData, fileName}) => {
    
    const headers = [
        {label: "First Name", key:"first_name"},
        {label: "Last Name", key:"last_name"},
        {label: "Store", key:"store" },
        {label:"Position", key:"position"},
        {label:"Application Recieved", key:"date_in"},
        {label:"Recruiter Screen Status", key:"recruiterscreen_status"},
        {label:"Testing Status", key:"testing_status"},
        {label:"Manager Interview Status", key:"interview_status"},
        {label:"Background Check Status", key:"backgroundcheck_status"},
        {label:"Drug Screen Screen Status", key:"drugscreen_status"},
        {label:"Paperwork Status", key:"paperwork_status"},
        {label:"Recruiter Screen TTC", key:"recruiter_screen_var"},
        {label:"Testing TTC", key:"testing_var"},
        {label:"Manager Interview TTC", key:"interview_var"},
        {label:"Background Check TTC", key:"backgroundcheck_var"},
        {label:"Drug Screen TTC", key:"drugscreen_var"},
        {label:"Paperwork TTC", key:"paperwork_var"},
        {label:"Overall TTC", key:"overall_completion_var"}

    ]
    
    return (
        <button className='export'>
            <CSVLink data={csvData} filename={fileName} headers={headers}>Export All Data</CSVLink>
        </button>
    )
}


export default ExportReactCSV