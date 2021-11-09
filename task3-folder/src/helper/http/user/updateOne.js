const { app, model } = require("../../../state");
module.exports = () => {
  app.post("/user/updateOne", async (req, res) => {
    try {
      if (req.body.name == null) {
        res.status(422).send({ status: "fail", message: "name undefined" });
        throw "error";
      }
      if (typeof req.body.name != "string") {
        res.status(422).send({ status: "fail", message: "name not string" });
        throw "error";
      }
      if (req.body.name == "") {
        res.status(422).send({ status: "fail", message: "name is empty" });
        throw "error";
      }
      if (req.body.email == null) {
        res.status(422).send({ status: "fail", message: "email undefined" });
        throw "error";
      }
      if (typeof req.body.email != "string") {
        res.status(422).send({ status: "fail", message: "email not string" });
        throw "error";
      }
      if (req.body.email == "") {
        res.status(422).send({ status: "fail", message: "email is empty" });
        throw "error";
      }
      const emailFound = await model.user.findOne({
        where: { email: req.body.email },
      });
      if (emailFound) {
        if (emailFound.id != req.body.id) {
          res
            .status(422)
            .send({ status: "fail", message: "email already registered" });
          throw "error";
        }
      }
      if (req.body.age != null) {
        if (typeof req.body.age != "number") {
          res
            .status(422)
            .send({ status: "fail", message: "email not integer" });
          throw "error";
        }
      }
      let set = { ...req.body };
      delete set.id;
      const data = await model.user.update(set, { where: { id: req.body.id } });
      res.send({ status: "ok", data });
    } catch (it) {
      console.log(it);
      res.status(400).send({ status: "fail" });
    }
  });
};
