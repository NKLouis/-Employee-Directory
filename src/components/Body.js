import React from "react";

function tableBody(props){

    function formatDOB(date){
        const Array= date.split("-")
        const Year= Array[0]
        const Month= Array[1]
        const dayArray=Array[2].split("T")
        const Day=dayArray[0]
        const FormatDate=[Month, Day, Year].join("-")

        return FormatDate
    };
    return(
    <tbody>
            return(
                <tr>
                 <td>
                   
                <img alt={props.name} className="img-fluid" src={props.image.medium} style={{ margin: "0 auto" }} />
                 </td>
                 <td>
                    {props.name} 
                 </td>
                 <td>
                    {props.phone}
                 </td>
                 <td>
                    <a href={"mailto:" + props.email}>{props.email}</a>
                 </td>
                 <td>
                    {formatDOB(DOB.date)}
                 </td>
                </tr>

            )
    );
    </tbody>
    
};

export default tableBody;







