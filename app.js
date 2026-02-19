const  express = require('express');
const  app = express();
const  PORT = 3000
app.get('/hello', (req, res) => {
  res.json({ message: "Hello World" });
});
app.listen(PORT , ()=> console.log(`server is running on port ${PORT}`));

module.exports = app;
