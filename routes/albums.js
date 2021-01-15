const express = require("express");
const request = require('request');
const router = express.Router();

const AlbumLike = require("../models/AlbumLike");


// @desc get top 100 albums
// @route GET /api/albums
router.get("/", async (req, res) => {
    try {
        let clientIp = req.clientIp;
        await request("https://itunes.apple.com/us/rss/topalbums/limit=100/json", {json: true}, async (err, apiResponse, body) => {
            if (err) {
                console.log(err);
                res.send(err);
            }

            let topAlbums = apiResponse.body.feed.entry;

            for (let i = 0; i < topAlbums.length; i++) {
                let album = topAlbums[i];

                // check if album was liked by the user
                let isLikedByUser = await AlbumLike.findOne({
                    label: album["im:name"].label,
                    userIp: clientIp
                }) == null ? false : true;

                album.isLikedByUser = isLikedByUser;
            }
            res.status(200).send(topAlbums);
        });
    } catch (e) {
        console.log(e);
        res.status(401).send({
            message: "Error occurred while obtaining albums"
        });
    }
});

// @desc add new like to album if the user didn't like previously
// @route POST /api/albums/like
router.post("/like", async (req, res) => {
    try {
        let albumName = req.body.albumName;
        let userIp = req.clientIp;

        let albumUserLikeEntry = {label: albumName, userIp: userIp};

        // check if album-user-like entry exists
        let entry = await AlbumLike.findOne(albumUserLikeEntry);

        // if doesn't exist
        if (!entry) {
            await AlbumLike.create(albumUserLikeEntry);
            res.status(200).send({message: "Liked the album!"});
        }
    } catch (e) {
        console.log(e);
        res.status(401).send({
            message: "Error occurred while adding albums"
        });
    }
});

// @desc unlike the album
// @route DELETE /api/albums/like/:albumName
router.delete("/like/:albumName", async (req, res) => {
    try {
        let albumName = req.params.albumName;
        let userIp = req.clientIp;

        let albumUserLikeEntry = {label: albumName, userIp: userIp};

        // delete the album entry
        await AlbumLike.findOneAndDelete(albumUserLikeEntry, null, async (err, doc, result) => {

            if (err) {
                res.status(401).send(err);
                console.log(err);
            }

            res.status(200).send({message: "Unliked the album!"});
        });

    } catch (e) {
        console.log(e);
        res.status(401).send({
            message: "Error occurred while adding albums"
        });
    }
});

// @desc get number of likes for the album
// @route GET /api/albums/likes/:albumName
router.get("/likes/:albumName", async (req, res) => {
    try {
        let albumName = req.params.albumName;

        await AlbumLike.countDocuments({label: albumName}, (err, count) => {

            if (err) {
                res.status(401).send(err);
            }

            res.status(200).send({numLikes: count});
        })

    } catch (e) {
        console.log(e);
        res.status(401).send({
            message: "Error occurred while obtaining albums"
        });
    }
});

module.exports = router;
