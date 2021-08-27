const app = require('express')()
const axios = require('axios')
const cors = require('cors')
const IPIFY_URL = `https://api.ipify.org`
const port = process.env.PORT || 8080

app.use(cors())

app.get('/', async (req, res) => {
  try {
    const ip = await axios({
      method: 'get',
      url: IPIFY_URL,
      params: {
        format: 'json'
      }
    })
    console.log({ ip })
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})