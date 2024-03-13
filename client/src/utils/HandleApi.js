/* eslint-disable no-unused-vars */

import axios from "axios";
const baseUrl = "http://localhost:3000";
const getAllTasks = (setTask) => {
  axios.get(`${baseUrl}/getTask`).then((response) => {
    setTask(response.data);
  });
};
const addTask = (text, setText, setTask) => {
  axios
    .post(`${baseUrl}/addTask`, { action: text })
    .then((response) => {
      setText("");
      getAllTasks(setTask)
    })
    .catch((err) => {
      console.log(err);
    })   
};
const deleteTask = (id, setTask) => {
  axios
    .delete(`${baseUrl}/deleteTask/${id}`)
    .then((response) => {      
      getAllTasks(setTask)
    })
    .catch((err) => console.log(err));
  
};
const updateTask = (id, setTask) => {
  axios
    .patch(`${baseUrl}/updateTask/${id}`)
    .then((response) => {
      getAllTasks(setTask)
    })
    .catch((err) => console.log(err))
    
};

export { getAllTasks, addTask, deleteTask, updateTask };
