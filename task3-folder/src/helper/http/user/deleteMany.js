const { app, model } = require("../../../state");

module.exports = () => {
  app.post("/user/deleteMany", async (req, res) => {
    try {
      const data = await model.user.destroy({
        where: req.body,
      });
      res.send({ status: "ok", data });
    } catch (it) {
      console.log(it);
      res.status(400).send({ status: "ok", data });
    }
  });
};
