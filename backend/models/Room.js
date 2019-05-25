const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    state: { // NAN, RES, OCC
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
