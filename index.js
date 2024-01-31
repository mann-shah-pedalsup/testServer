const express = require("express");
const app = express();

app.get("/loop", async (req, res) => {
    console.log("start loop");
    let arr = new Array(1000000).fill(1);

    for (let index = 0; index < arr.length; index++) {
        await new Promise((resolve) => {
            setImmediate(() => {
                console.log(index);
                resolve();
            });
        });
    }

    console.log("loop end");
    res.send("this is loop response");
});

app.get("/test", (req, res) => {
    console.log("this is test api")
    res.send("this is response");
});

app.listen(10000, () => {
    console.log(`Server is running on port ${10000}`);
  });