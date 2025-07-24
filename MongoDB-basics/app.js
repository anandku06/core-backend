const mongoose = require("mongoose");

// Opens Mongoose's default connection to MongoDB : returns a Promise
mongoose
  .connect(
    "mongodb+srv://rishavgupta2000:rishavgupta2020@cluster0.jxx3v27.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Database connected successfully!!");
  })
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

// create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
  try {
    // we use the model instance here to access the mongodb methods
    // create a new Document or record : one approach
    // const newUser = await User.create({
    //     name : "Anand Kumar",
    //     email : "anandkr1704@gmail.com",
    //     age : 20,
    //     isActive : true,
    //     tags : ["developer"]
    // }) // Creates a new document or documents

    // another approach
    const newUser = new User({
      name: "ABCBKL",
      email: "abcbkl@exmaple.com",
      age: 14,
      isActive: true,
      tags: ["asd", "bfd", "lkg", "gjh"],
    });

    await newUser.save(); // Saves this document by inserting a new document into the database

    // console.log("Created a new user!!", newUser)

    // get all users
    const allUsers = await User.find({}); // if empty object passed, then return all the records
    // console.log(allUsers) // returns the list of all the records present in the model

    // get specific users : inside the find() method, object given for the filter
    const userWithActiveFalse = await User.find({ isActive: false });
    // console.log("User: ", userWithActiveFalse)

    const getOneUser = await User.findOne({ name: "ABC" }); // returns the first occurence of the record if multiple
    // console.log(getOneUser)

    // get user by id
    const getUserId = await User.findById(newUser._id);
    console.log(getUserId);

    // displaying some specific fields
    const getSelectedInfo = await User.find().select("name email -_id");
    console.log(getSelectedInfo);

    // displaying limited users particularly
    const limitedUsers = await User.find().limit(5).skip(1); // limit the result to 5 and skip the first one
    console.log(limitedUsers);

    // sorted users
    const sortedUsers = await User.find().sort({ age: -1 }); // sort by the parameter age in descending order(-1)
    console.log(sortedUsers);

    // count the number of entries
    const countDocs = await User.countDocuments({ isActive: true });
    console.log(countDocs);

    // delete a user
    // const deleteUser = await User.findByIdAndDelete(newUser._id);
    // console.log("deleted user: ", deleteUser);

    // update a user
    const updateUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 240, name : "ABCDEF" },
        $push: { tags: "udp" },
      },
      { new: true }
    );
    console.log(updateUser)

  } catch (error) {
    console.log(error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
