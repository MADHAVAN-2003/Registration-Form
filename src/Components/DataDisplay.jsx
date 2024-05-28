import React, { useContext } from "react";
import { Context } from "../ContextData";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function DataDisplay() {
  const { finalData } = useContext(Context);
  return (
    <div>
      <h3> User Profile </h3>
      <div>
        <Table border="1" >
          <TableHead>
            <TableRow>
              <TableCell>Firstname</TableCell>
              <TableCell>Lastname</TableCell>
              <TableCell>Fathername</TableCell>
              <TableCell>Mothername</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>State</TableCell>
              <TableCell>City</TableCell>
              <TableCell>InstitionName</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Yoc</TableCell>
              <TableCell>PERCENTAGE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((val, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{val.formData.firstname}</TableCell>
                  <TableCell>{val.formData.lastname}</TableCell>
                  <TableCell>{val.formData.fathername}</TableCell>
                  <TableCell>{val.formData.mothername}</TableCell>
                  <TableCell>{val.formData.country}</TableCell>
                  <TableCell>{val.formData.state}</TableCell>
                  <TableCell>{val.formData.city}</TableCell>
                  <TableCell>
                    {val.educationDetails[0].institutioname}
                  </TableCell>
                  <TableCell>{val.educationDetails[0].coursename}</TableCell>
                  <TableCell>
                    {val.educationDetails[0].yearofcompletion}
                  </TableCell>
                  <TableCell>{val.educationDetails[0].percentage}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
     
    </div>
  );
}

export default DataDisplay;
