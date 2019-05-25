const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    reserveState: { // NAN, RES, OCC
        type: String,
    },
    roomExpiration: {
        type: String,
    },
    alertState: { // RAS, MOVEMENT, ALERT
        type: String,
    },
    roomId: {
        type: String,
    },
    roomName: {
        type: String,
    },
    roomQuarter: {
        type: String,
    },
    roomCluster: {
        type: String,
    }
}, { strict: true });

module.exports = mongoose.model('Room', UserSchema);
