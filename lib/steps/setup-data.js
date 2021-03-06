const { CALLBACK_URL } = require('../../config')
const { logger } = require('@vtfk/logger')

module.exports = async data => {
  logger('info', ['setup-data', data.length, 'start'])

  if (CALLBACK_URL) {
    logger('info', ['setup-data', 'adds callbackUrl'])
    data = data.map(job => Object.assign({}, job, { callbackUrl: `${CALLBACK_URL}/${job._id}` }))
  } else {
    logger('info', ['setup-data', 'nothing to add'])
  }
  logger('info', ['setup-data', data.length, 'finished'])
  return data
}
