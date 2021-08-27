const app = require('express')()
const axios = require('axios')
const cors = require('cors')
const IPIFY_URL = 'https://api.ipify.org'
const port = process.env.PORT || 8080

app.use(cors())

// const getRemoteIP = () => {
//   return axios({
//       method: 'get',
//       url: IPIFY_URL,
//       params: {
//         format: 'json'
//       }
//     })
// }

app.get('/', async (req, res) => {
  try {
    const response = await axios({
      method: 'get',
      url: IPIFY_URL,
      params: {
        format: 'json'
      }
    })
    console.log('ip:', repsonse)
    res.status(200).json(response)
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})