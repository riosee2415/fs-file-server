const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const firestore = require("./firebase");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post("/api/test", async (req, res) => {
  console.log("Server Is Called By Client");
  console.log(req.body.params.inputData);

  const {
    body: {
      params: { inputData },
    },
  } = req;

  let sendData = [];

  try {
    await firestore
      .collection("Memo")
      .get()
      .then((response) =>
        response.forEach((doc) =>
          sendData.push({
            refKey: doc.id,
            title: doc.data().title,
            content: doc.data().content,
            regDate: doc.data().regDate,
          })
        )
      );
  } catch (e) {
    console.log(e);
  }

  return res.json(sendData);
});

app.listen(PORT, () => {
  console.log(`✅ ${PORT} SERVER START!`);
});
