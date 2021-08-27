const app = require('express')()
const ipify = require('ipify')
const port = process.env.PORT || 8080

const getPublicIP = () => {
  return ipify({ useIPv6: false })
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