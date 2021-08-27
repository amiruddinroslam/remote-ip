const app = require('express')()
const publicIp = require('public-ip')
const port = process.env.PORT || 8080

const getPublicIP = () => {
  return publicIp.v4()
}

app.get('/', async (req, res) => {
  try {
    const ip = await getPublicIP()
    console.log({ ip })
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})