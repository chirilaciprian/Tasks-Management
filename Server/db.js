const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => console.log("Connected to db"))
  .catch((err) => console.error(err));

const ItemSchema = new mongoose.Schema({
  action: String,
  done: Boolean,
});

const ItemModel = mongoose.model("item", ItemSchema);

async function addItem(action, done) {
  try {
    const res = await ItemModel.create({ action, done });
    return res;
  } catch (err) {
    return err;
  }
}

async function getItems() {
  try {
    const res = await ItemModel.find();
    return res;
  } catch (err) {
    return err;
  }
}

async function deleteItem(Action) {
  try {
    const res = await ItemModel.deleteOne({ action: Action });
    return res;
  } catch (err) {
    return err;
  }
}
async function updateItem(Action) {
  try {
    const res = await ItemModel.updateOne({ action: Action }, { done: true });
    return res;
  } catch (err) {
    return err;
  }
}