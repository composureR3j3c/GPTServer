const express = require("express");

const { insertAsset } = require("../SqlzDB/asset/insertAsset");
const { selectAsset } = require("../SqlzDB/asset/selectAsset");
const { selectCurr } = require("../SqlzDB/asset/SelectCurr");
const { deleteRecord } = require("../SqlzDB/delete/deleteRec");
const { insertProfit } = require("../SqlzDB/profit/insertTransact");
const { selectProfit } = require("../SqlzDB/profit/selectProfit");
const { checkDBconn } = require("../SqlzDB/selectTest");
const { chat } = require("./callChatPdf/chat");
const { upload } = require("./callChatPdf/uploadFile");

const { formidable } = require("formidable");

exports.checkSrv = (req, res) => {
  res.status(200).send({ message: "Server UP!" });
};

exports.deleteRecord = async (req, res) => {
  dbData = await deleteRecord(req.body.table, req.body.ID);

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};

exports.checkDB = async (req, res) => {
  dbData = await checkDBconn();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.profit = async (req, res) => {
  dbData = await selectProfit();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.chat = async (req, res) => {
  try {
    response = await chat(req?.body?.src, req?.body?.mess);
    if (response == null || response == "error") {
      console.log("error returned##########" + response);
      res
        .status(500)
        .header("Content-Type", "application/json")
        .send({ message: "service unavilable" });
    } else {
      res
        .status(200)
        .header("Content-Type", "application/json")
        .send({ ans: response });
    }
  } catch (error) {
    res
      .status(500)
      .header("Content-Type", "application/json")
      .send({ message: "service unavilable" });
  }
};
exports.asset = async (req, res) => {
  dbData = await selectAsset();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};
exports.curr = async (req, res) => {
  dbData = await selectCurr();

  res.status(200).header("Content-Type", "application/json").send({ dbData });
};

exports.addFile = async (req, res) => {
  var formdata;
  console.log("start");
  try {
    // console.log(req)
    const form = formidable({ multiples: true });
    [fields, files] = await form.parse(req);
    console.log("files: ", files);
    try{

    
    formdata = files.file[0].filepath.toString();
  }
  catch(e){
    res
      .status(500)
      .header("Content-Type", "application/json")
      .send({ message: "service unavilable" });
      return;
  }
    console.log("formdata" + formdata);
    response = await upload(formdata);
    if (response == null || response == "error") {
      console.log("error returned##########" + response);
      res
        .status(500)
        .header("Content-Type", "application/json")
        .send({ message: "service unavilable" });
    } else {
      res
        .status(200)
        .header("Content-Type", "application/json")
        .send({ ID: response });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .header("Content-Type", "application/json")
      .send({ message: "service unavilable" });
  }
};

// Validate request
