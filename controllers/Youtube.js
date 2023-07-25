import {createError} from "../error.js";
import Youtube from "../models/youtube.js";

export const addVideo = async (req, res, next) => {
    const newVideo = new Youtube({userId: req.user.id, ...req.body });
    try{
        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);
    } catch (err){
        next(err)
    }
};
export const updatedVideo = async (req, res, next) => {
    try{
        const video = await Youtube.findById(req.params.id);
        if (!video) return next (createError(404, "Video is not found!"))
        if(req.user.id === video.userId){
            const updatedVideo= await Youtube.findByIdAndUpdate(req.params.id,
                {
                $set: req.body,
            },
                { new: true}
            );
            res.status(200).json(updatedVideo)
        } else{
            return next(createError(403, "You can update your only video!"))
        }
    } catch (err){
        next(err)
    }
}
export const deleteVideo = async (req, res, next) => {
    try{
        const video = await Youtube.findById(req.params.id);
        if (!video) return next (createError(404, "Video is not found!"))
        if(req.user.id === video.userId){
           await Youtube.findByIdAndDelete(req.params.id,
            );
            res.status(200).json("The video has been deleted!")
        } else{
            return next(createError(403, "You can delete your only video!"))
        }
    } catch (err){
        next(err)
    }
}
export const getVideo = async (req, res, next) => {
    try{
        const video = await Youtube.findById(req.params.id)
        res.status(200).json(video)
    } catch (err){
        next(err)
    }
};
export const addView = async (req, res, next) => {
    try{
        await Youtube.findByIdAndUpdate(req.params.id,{
            $inc: {views: 1}
        })
        res.status(200).json("The view is up")
    } catch (err){
        next(err)
    }
};
export const random = async (req, res, next) => {
    try{
        const videos = await Youtube.aggregate([{$sample:{size: 40}}])
        res.status(200).json(videos)
    } catch (err){
        next(err)
    }
};
export const trend = async (req, res, next) => {
    try{
        const videos = await Youtube.find().sort({views: -1})
        res.status(200).json(videos)
    } catch (err){
        next(err)
    }
};

export const Search = async (req, res, next) => {
    const query = req.query.q
    try{
        const videos = await Youtube.find({
            title:{$regex: query, $options: "i"},
        }).limit(40);
        res.status(200).json(videos)
    } catch (err){
        next(err)
    }
};