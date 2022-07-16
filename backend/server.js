import express from "express"

const app = express();

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`server at http:localhost:${port}`);
})