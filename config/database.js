const mongoose = require ('mongoose');

let connectionString = process.env.MONGO_URI
mongoose.connect(
`mongodb+srv://cassiemuun:<password>@cluster0.u7a3qq1.mongodb.net/Cafe?retryWrites=true&w=majority`
, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

