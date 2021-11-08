const { app, model } = require("../../../state");
module.exports = () => {
  app.post("/user/createOne", async (req, res) => {
    try {
      if (req.body.name == null) {
        res.status(422).send({ status: "fail", message: "name undefined" });
      }
      if (typeof req.body.name != "string") {
        res.status(422).send({ status: "fail", message: "name not string" });
      }
      if (req.body.name == "") {
        res.status(422).send({ status: "fail", message: "name is empty" });
      }
      if (req.body.email == null) {
        res.status(422).send({ status: "fail", message: "email undefined" });
      }
      if (typeof req.body.email != "string") {
        res.status(422).send({ status: "fail", message: "email not string" });
      }
      if (req.body.email == "") {
        res.status(422).send({ status: "fail", message: "email is empty" });
      }
      const emailFound = await model.user.findOne({
        where: { email: req.body.email },
      });
      if (emailFound) {
        res
          .status(422)
          .send({ status: "fail", message: "email already registered" });
      }
      const data = await model.user.create(req.body);
      res.send({ status: "ok", data });
    } catch (it) {
      console.log(it);
      res.status(400).send({ status: "fail" });
    }
  });
};
