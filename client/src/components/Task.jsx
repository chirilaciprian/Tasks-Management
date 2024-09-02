/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import "../styles.css"
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// eslint-disable-next-line no-unused-vars, react/prop-types
const Task = ({ action, completed, updateTask, deleteTask }) => {
  return (
    <div className="task">
      <Card sx={{ minWidth: 300 , display: "flex", justifyContent: "center", padding:0,margin:0 }}>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",          
            backgroundColor: completed ? "success.light" : "inherit",            
            "&:last-child": { padding: 1.5, },
          }}
        >
          {completed ? <></> : <CheckCircleOutlineIcon onClick={updateTask} />}
          <Typography gutterBottom variant="h5" sx={{padding:0,margin:0}}>
            {action}
          </Typography>
          <DeleteIcon className="icon" onClick={deleteTask} />
        </CardContent>
      </Card>
    </div>
  );
};

export default Task;
