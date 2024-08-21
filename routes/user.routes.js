const express = require("express");
const userRoutes = express.Router();

const { heroModel } = require("../models/hero.model");

userRoutes.post("/", async (req, res) => {
  const data = req.body;
  try {
    const heroData = new heroModel(data);
    await heroData.save();
    res.send("Hero create Succesfully");
  } catch (error) {
    console.log(error);
    res.status(400).send("something went wrong");
  }
});

userRoutes.get("/", async (req, res) => {
    try {
      const getdata = await heroModel.find();
      res.status(200).send(getdata);
    } catch (error) {
      res.status(400).send("Something went wrong");
      console.error(error);
    }
  });

userRoutes.patch("/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const editData = await heroModel.findByIdAndUpdate(userid, req.body);
    if (editData) {
      res.status(200).send(`Hero edit succesfully with this ${userid} id`);
      console.log("edit succesfully");
    } else {
      res.send("User not found");
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
    console.log(error);
  }
});

userRoutes.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const updatedheros = await heroModel.findByIdAndDelete({ _id: id });
    if (updatedheros) {
      res.status(200).send("hero data deleted succesfully");
      console.log("hero delete succesfully");
    } else {
      res.send("user not found");
    }
  } catch (error) {
    res.status(400).send("Something went wrong");
    console.log(error);
  }
});

module.exports = { userRoutes };
