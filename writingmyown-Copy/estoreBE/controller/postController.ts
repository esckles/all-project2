import { Request, Response } from "express";
import userModel from "../model/userModel";
import postModel from "../model/postModel";
import { streamUpload } from "../config/streamifier";

export const createPost = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { title } = req.body;
    const user: any = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "Account not found!",
      });
    }

    const { secure_url, public_url }: any = await streamUpload(req);
    console.log("Checking this:", secure_url, public_url);
    const newPost = await postModel.create({
      title,
      userId,
      image: secure_url,
      imageId: public_url,
    });

    user.posts.push(newPost?._id);
    user.save();

    return res.status(201).json({
      message: "Post created successfully",
      data: newPost,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const posts = await postModel.find().sort({
      createdAt: -1,
    });

    return res.status(200).json({
      message: `${posts.length} posts(s created)`,
      data: posts,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};

export const getSinglePosts = async (req: Request, res: Response) => {
  try {
    const { postId } = req.params;

    const posts = await postModel.findById(postId);

    if (!posts) {
      return res.status(404).json({
        message: "Post not found!!",
      });
    }

    return res.status(200).json({
      message: "Post gotten successfully",
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Internal server error",
      data: error,
    });
  }
};
