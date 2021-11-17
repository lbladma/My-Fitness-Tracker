const router = require("express").Router();
const workoutRoutes = require("./workoutroutes");

router.use("/workouts", workoutroutes);

module.exports = router;
