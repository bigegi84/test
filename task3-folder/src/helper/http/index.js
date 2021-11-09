const user = require("./user");
module.exports = () => {
  user.createOne();
  user.deleteMany();
  user.readMany();
  user.updateOne();
};
