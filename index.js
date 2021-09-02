const app = require('express')()
const cors = require('cors')
const publicIp = require('public-ip');
const port = process.env.PORT || 8080

app.use(cors())

const getPublicIPv4 = async () => {
  return await publicIp.v4()
}

/*  returns client IP address when runs on local, but when deploys on server (heroku in this case),
    always returns a same IP, because its requesting IP for itself
*/
app.get('/', async (req, res) => {
  try {
    const ip = await getPublicIPv4()
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

/*  returns a local IP if runs on localhost, but when deploys on server (heroku in this case),
    will return correct IP address as per other services (ipify, geolocation-db, etc..).
*/
app.get('/ip', async (req, res) => {
  try {
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').split(',')[0].trim()
    res.status(200).json({ ip })
  } catch (err) {
    res.status(500).json({ message: err })
  }
})

app.listen(port, () => {
  console.log(`remote-ip app listening at port: ${port}`)
})