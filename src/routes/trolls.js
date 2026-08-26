const express = require("express");

const router = express.Router();

const trolls = [
  {
    id: 1,
    name: "Skogtroll",
    location: "Bergen",
  },
  {
    id: 2,
    name: "Sjøtroll",
    location: "Kristiansand",
  },
];

router.get("/", (req, res) => {
  res.json(trolls);
});

router.get('/random', (req, res) => {
  const index = Math.floor(Math.random() * trolls.length)
  res.json(trolls[index]) // returns a random troll object
})

module.exports = router;
