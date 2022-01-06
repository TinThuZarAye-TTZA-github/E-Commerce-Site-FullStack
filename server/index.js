const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const jwt = require("jsonwebtoken");
const db = require("./models");



require("dotenv").config();
require("./passport/LoginWithGoogle");




app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use(express.json());

app.use(passport.initialize());
app.use(passport.session());



//Routers for user signup and login
const userRouter = require("./routes/Users");
app.use("/usersignup", userRouter);

//Router for seller
const sellerRouter = require("./routes/Sellers");
app.use("/sellersignup", sellerRouter);

const addItemRouter = require("./routes/AddItem");
app.use("/additem", addItemRouter);

const loginWithGoogle = require("./routes/LoginWithGoogle");
app.use("/", loginWithGoogle);


db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("server is running in http://localhost:3001")
    });
});


