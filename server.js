const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write(`
     <h1>Password Generator</h1>
    <form action="/getPassword">
      <input type="number" name="length" placeholder="Password Length" />
          <button type="submit">Get My Password</button>
    </form>
  `);
  }
  if (req.url.includes("/getPassword")) {
    // get password length
    const length = +req.url.slice(
      "/getPassword?length=".length,
      req.url.length
    );
    let password = "";
    const letters = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    const upper = letters.map((e) => e.toUpperCase());
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    letters.push(...numbers, ...upper);

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.round(Math.random() * letters.length - 1);
      password += letters[randomIndex];
    }
    res.write(`
        <a href="/">Home</a>
     <h1>Your Password</h1>
     ${password}
  `);
  }

  res.end();
});

server.listen(5000);
