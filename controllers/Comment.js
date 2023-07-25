import youtube from "../models/youtube.js";
import Youtube from "../models/youtube.js";
import {createError} from "../error.js";
import comments from "../routes/Comments.js";
import Comment from "../models/comment.js";

export const addComment = async (req, res, next) => {
    const newComment = new Comment({...req.body, userId: req.user.id})
    try{
        const savedComment = await newComment.save()
        res.status(200).send(savedComment)
    }catch (err){
        next(err)
    }
}

export const deleteComment = async (req, res, next) => {
    try{
        const comment = await Comment.findById(res.params.id)
        const video = await Youtube.findById(res.params.id)
        if(req.user.id === comment.userId || req.user.id === video.userId){
            await Comment.findByIdAndDelete(req.params.id)
            res.status(200).json("The comment has been deleted")
        } else {
            return next(createError(403, "You can delete only your comment!"))
        }
    }catch (err){
        next(err)
    }
}

export const getComments = async (req, res, next) => {
    try{
        const comment = await Comment.find({videoId: req.params.videoId})
        res.status(200).json(comment)
    }catch (err){
        next(err)
    }
}