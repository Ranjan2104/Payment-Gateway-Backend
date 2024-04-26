const express = require("express");
const { addPaymentUser, payments, getKey } = require("../controllers/user.controllers");
const router = express.Router();

router.post("/api/v1/createorder", addPaymentUser);
router.post("/api/v1/payments", payments);
router.post("/api/v1/getKey", getKey);



module.exports = router;