const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes/routes");
const cors = require("cors");

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(res => {
    console.log('Database connected!')
}).catch(e => {
    console.log('Database Error!')
});

app.use(bodyparser.json());
app.use(cors());
app.use("/api", routes);
app.listen(4000, () => console.log("server running!"));