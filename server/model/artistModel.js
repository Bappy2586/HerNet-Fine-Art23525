import mongoose from "mongoose";
const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
 artistDetails: {
    type: String,
    required: false
  },
  artistCategory: {
    type: String,
    required: false
  }

})

export default mongoose.model("Artist", artistSchema)