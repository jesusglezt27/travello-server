const router = require("express").Router();
const authRoutes = require("./auth.routes")
const uploadRoutes = require("./upload.routes")
const userRoutes = require("./user.routes")
const itineraryRoutes = require("./itinerary.routes")
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

router.use("/auth",authRoutes) 
// router.use("/upload",uploadRoutes) 
router.use("/user",userRoutes)
router.use("/itinerary",itineraryRoutes)

module.exports = router;