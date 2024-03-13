const {Router} = require('express');
const TaskController = require('../Controllers/TaskController');
const router = Router();

router.get('/getTask',TaskController.getTasks)
router.post('/addTask',TaskController.addTask)
router.patch('/updateTask/:id',TaskController.updateTask)
router.delete('/deleteTask/:id',TaskController.deleteTask)

module.exports = router;