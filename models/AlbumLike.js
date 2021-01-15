const mongoose = require("mongoose");

const AlbumLikesSchema = new mongoose.Schema({
    label: {
        type: String,
        required: true
    },
    userIp: {
        type: String,
        required: true
    }
});


const AlbumLike = mongoose.model("AlbumLike", AlbumLikesSchema);

module.exports = AlbumLike;
