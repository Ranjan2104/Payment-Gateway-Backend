const { errorHandler, successHandler } = require("../utils/responseHandler.utils");
const { instance } = require('../services/razorpay/index');
const crypto = require('crypto');

const addPaymentUser = async (req, res, next) => {
  try {
    var options = {
      amount: Number(req.body.amount * 100),
      currency: "INR"
    };
    const order = await instance.orders.create(options);

    return next(successHandler(res, order, 200));

  } catch (error) {
    console.log("error", error.message);
    return next(errorHandler(res, error.message, 500));
  }
}

const payments = async (req, res, next) => {
  try {
    let { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + '|' +  razorpay_payment_id
    const expectedsign = crypto.createHmac("sha256", process.env.RAZORPAY_API_SECERT)
    .update(body.toString()).digest("hex");

    const verify = expectedsign === razorpay_signature

    if (verify) {
      // save in DB
      return res.redirect(`http://localhost:3000/success?reference=${razorpay_payment_id}`);
    } else {
      return next(errorHandler(res, req.body, 500));
    }
  } catch (error) {
    console.log("error", error.message);
    return next(errorHandler(res, error.message, 500));
  }
}

const getKey = async (req, res, next) => {
  try {
    return next(successHandler(res, process.env.RAZORPAY_API_KEY, 200));
  } catch (error) {
    console.log("error", error.message);
    return next(errorHandler(res, error.message, 500));
  }
}

module.exports = { addPaymentUser, payments, getKey }