const mongoose = require('mongoose')
const { Schema } = mongoose
const StatusEnum = require('../../../common/status.emun')

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: StatusEnum.ACTIVE
    }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema)