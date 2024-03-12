const { error } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  const fileSciezka = path.join(__dirname, "../files/europa_stolice.txt");

  fs.readFile(fileSciezka, "utf-8", (err, data, next) => {
    if (err) {
      console.log("Błąd podczas odczytu pliku:", err);
      return res
        .status(500)
        .send("Bład, zgłoś problem na email: kocjan.nikodem@gmail.com");
    }

    console.log(data);
    const linie = data.split("\n");
    console.log(linie);

    const tablica = [];

    linie.forEach(linia => {
      if (linia.trim() === "") {
        return;
      }
      const [kraj, stolica] = linia.split(":").map(element => element.trim());
      tablica.push([kraj, stolica]);
    });

    console.log(tablica);
    res.render("stoliceeuropy", { dane: tablica, ilosc: tablica.length });
  });
});

module.exports = router;
