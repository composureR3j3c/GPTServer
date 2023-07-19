const express = require("express");
const { insertPayable } = require("../SqlzDB/led/insertPayable");
const {insertBUY}=require("../SqlzDB/led/addPayment")
const { selectPayable, selectPayment } = require("../SqlzDB/led/selectPayable");

exports.payable = async (req, res) => {
  dbData = await selectPayable('pay');

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.recievable = async (req, res) => {
  dbData = await selectPayable('rec');

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};

exports.detPayment = async (req, res) => {
  dbData = await selectPayment(req.body.Invoice);

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.addPayable = async (req, res) => {
  if (isNaN(req.body.Amount)) {
    res
      .status(422)
      .header("Content-Type", "application/json")
      .send({ message: "insert not successful" });
  } else {
    dbData = await insertPayable(
      req.body.Date,
      req.body.DueDate,
      req.body.Amount,
      req.body.Invoice,
      req.body.Supplier,
      req.body.type
    );
    if (dbData == null || dbData == "") {
      res
        .status(404)
        .header("Content-Type", "application/json")
        .send({ message: "insert not successful" });
    } else {
      res
        .status(200)
        .header("Content-Type", "application/json")
        .send({ dbData });
    }
  }
};
exports.addBUY= async (req,res)=>{
  if (isNaN(req.body.Buy) || isNaN(req.body.Sell)) {
    res
      .status(422)
      .header("Content-Type", "application/json")
      .send({ message: "insert not successful" });
  } else {
    dbData = await insertBUY
    (
      req.body.Buy,
      req.body.Sell,
      req.body.ID,
      req.body.nDate
    );
    if (dbData == null || dbData == "") {
      res
        .status(404)
        .header("Content-Type", "application/json")
        .send({ message: "insert not successful" });
    } else {
      res
        .status(200)
        .header("Content-Type", "application/json")
        .send({ dbData });
    }
  }
}

// Validate request
