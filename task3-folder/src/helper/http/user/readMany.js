const { app, model } = require("../../../state");
module.exports = () => {
  app.post("/user/readMany", async (req, res) => {
    try {
      const { page = 1, limit = 20, order = [], filter = {} } = req.body;
      const data = await model.user.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
        order,
        where: {
          ...filter,
        },
      });
      res.send({ status: "ok", data });
    } catch (it) {
      console.log(it);
      res.status(400).send({ status: "fail" });
    }
  });
};
