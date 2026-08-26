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

module.exports = router;
