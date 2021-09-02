const app = require('express')()
const cors = require('cors')
const publicIp = require('public-ip');
const port = process.env.PORT || 8080

app.use(cors())

getPublicIPv4 = async () => {
  return await publicIp.v4()
}

app.get('/', async (req, res) => {
  try {
    const ip = await getPublicIPv4();
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})