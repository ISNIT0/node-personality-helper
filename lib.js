const request = require('request-promise-native');

module.exports = function makeMessageResponder(config, language, personality) {
    //TODO: verify input
    return function getMessageReponse(message, sourceId, roomId, eventId, eventTime) {
        return request.post({
            method: 'POST',
            uri: `http://${config.host}:${config.port}/${config.version}/message/${language}/${personality}`,
            body: {
                message,
                sourceId,
                roomId,
                eventId,
                eventTime
            },
            json: true
        });
    }
}