const router = require("express").Router();
const clientRoutes = require("./clientController.js");

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
  console.log("hi")
});
module.exports = router;
// Book routes
router.use("/clientController", clientRoutes);

module.exports = router;
