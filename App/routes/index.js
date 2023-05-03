const express = require("express");
const router = express.Router();

const { update_user_data, get_user_data } = require("../controllers");

router.route("/user-data/:user_id").patch(update_user_data).get(get_user_data);

module.exports = router;
