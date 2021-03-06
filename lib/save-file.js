const fs = require('fs').promises
const { logger } = require('@vtfk/logger')

module.exports = async options => {
  try {
    await fs.writeFile(options.filePath, JSON.stringify(options.data, null, 2))
    logger('info', ['save-file', options.data._id, options.filePath, 'success'])
    return options.data
  } catch (error) {
    logger('error', ['save-file', options.data._id, options.filePath, 'error', JSON.stringify(error)])
    throw error
  }
}
