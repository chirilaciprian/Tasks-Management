/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import "./styles.css";
import React, { useEffect } from "react";

import Stack from "@mui/material/Stack";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Task from "./components/Task";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import {
  getAllTasks,
  addTask,
  updateTask,
  deleteTask,
} from "./utils/HandleApi";

function App() {
  const [task, setTask] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    getAllTasks(setTask);
  }, []);
  return (
    <>
    
      
      <div className="form">
        
        <TextField
          sx={{ marginRight: "15px"}}
          id="outlined-basic"
          label="Add Tasks"
          variant="outlined"
          type="text"
          placeholder="Add Tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Fab          
          color="primary"
          aria-label="add"
          onClick={() => addTask(text, setText, setTask)}
        >
          <AddIcon />
        </Fab>
      </div>
      <Stack className="tasks" spacing={2}>
        
      
        {task != null &&
          task.map((item) => (
            <Task
              key={item._id}
              action={item.action}
              completed={item.done}
              deleteTask={() => deleteTask(item._id, setTask)}
              updateTask={() => updateTask(item._id, setTask)}
            />
          ))}
      </Stack>
      
    </>
  );
}

export default App;
