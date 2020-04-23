const moment = require('moment')
const formatMessage = ( name, text ) => {
    return {
        name,
        text,
        time: moment().format('h:mm a')
    }
}

module.exports = formatMessage;