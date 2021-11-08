const user = require("./user");
module.exports = () => {
  user.createOne();
  user.readMany();
};
