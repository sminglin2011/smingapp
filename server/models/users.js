var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var userSchema = new Schema({
    name: {
        type: String,
        unique: true
    },
    email: {
        type: String
    },
    age: Number,
    address: String,
    createAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});
// 将数据模型暴露出去
module.exports = mongoose.model('users', userSchema);