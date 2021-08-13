const express = require("express");
const GeneralError = require("./middlewares/GeneralError");

const app = express();
const port = 3333;

const routes = require("./routes/routes");

app.use(express.json());
app.use(routes);
app.use(GeneralError);

app.listen(port, () => {
    console.log("Server is running on port", port);
});
