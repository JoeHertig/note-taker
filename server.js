const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const { notes } = require("./Develop/db/db.json");

function filterByQuery(query, notesArray) {
  let filteredResults = notesArray;
  if (query.title) {
    filteredResults = filteredResults.filter(
      (note) => note.title === query.title
    );
  }
  if (query.text) {
    filteredResults = filteredResults.filter(
      (note) => note.text === query.text
    );
  }

  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

app.get("/api/notes", (req, res) => {
  let results = notes;
  console.log(req.query);
  res.json(notes);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

// const app = express();
// const apiRoutes = require("./Develop/routes/apiRoutes");
// const htmlRoutes = require("./Develop/routes/htmlRoutes");

// // Parse incoming string or array data
// app.use(express.urlencoded({ extended: true }));

// // parse incoming JSON data
// app.use(express.json());
// app.use(express.static("public"));

// app.use("/api", apiRoutes);
// app.use("/", htmlRoutes);
