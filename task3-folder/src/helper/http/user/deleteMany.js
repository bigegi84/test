const { app, model } = require('../../../../state')
const uuid = require('uuid')
const moment = require('moment')
module.exports = () => {
  app.post('/owner/customer/createOne', async (req, res) => {
    try {
      const create = req.body
      create.id_customer = uuid.v4()
      const data = await model.customer.create({
        ...create,
        ...{
          created_at: moment()
        }
      })
      res.send({ status: 'ok', data })
    } catch (it) {
      console.log(it)
    }
  })
}
