const express = require("express");
const app = express();
const PORT = 3000;

function generateUniqueNumbers(count, max) {
  const numbers = new Set();
  while (numbers.size < count) {
    numbers.add(Math.floor(Math.random() * max) + 1);
  }
  return Array.from(numbers).sort((a, b) => a - b);
}

app.get("/euromillions", (req, res) => {
  const mainNumbers = generateUniqueNumbers(5, 50);
  const luckyStars = generateUniqueNumbers(2, 12);

  res.json({
    mainNumbers,
    luckyStars,
  });
});

app.get("/", (req, res) => {
  res.send(
    "🎲 Welcome to the EuroMillions Generator! Visit /euromillions to get your numbers."
  );
});

app.listen(PORT, () => {
  console.log(`EuroMillions API running at http://localhost:${PORT}`);
});