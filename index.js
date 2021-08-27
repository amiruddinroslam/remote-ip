const app = require('express')()
const cors = require('cors')
const port = process.env.PORT || 8080

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim();
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})