const cookie = require('cookie')
// create token and saving that in cookies
const sendToken = (user, statusCode, res) => {
  const token = user.getJwtToken()

  // Options for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    sameSite: 'none',
    secure: true
  }

  // Set a new cookie with the name
  res.setHeader('Set-Cookie', cookie.serialize('token', String(token), options))

  res.status(statusCode).json({
    success: true,
    user,
    token
  })
}

module.exports = sendToken
