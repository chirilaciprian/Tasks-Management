/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// eslint-disable-next-line no-unused-vars, react/prop-types
const Task = ({ action, completed, updateTask, deleteTask }) => {
  return (
    <div className="task">
      <Card sx={{ minWidth: 300, display: "flex", justifyContent: "center" }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: completed ? "success.light" : "inherit",
          }}
        >
          {completed ? <></> : <CheckCircleOutlineIcon onClick={updateTask} />}
          <Typography gutterBottom variant="h5">
            {action}
          </Typography>
          <DeleteIcon className="icon" onClick={deleteTask} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Task;
