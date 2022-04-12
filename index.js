const express = require("express");
const port = 3333;

const app = express();

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Started listening on port ${port}`);
});
