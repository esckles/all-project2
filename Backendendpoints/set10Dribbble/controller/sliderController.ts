import { Request, Response } from "express";
import userModel from "../model/userModel";
import sliderModel from "../model/sliderModel";

export const viewAllSlider = async (req: Request, res: any): Promise<any> => {
  try {
    const slider = await sliderModel.find();

    return res.status(200).json({
      message: "All slider found",
      data: slider,
      status: 200,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error gettting slider",
      status: 404,
    });
  }
};

export const createSlider = async (req: Request, res: any): Promise<any> => {
  try {
    const { video, image, profession, skills } = req.body;
    const slider = await sliderModel.create({
      video,
      image,
      profession,
      skills,
    });

    return res.status(201).json({
      message: "slider created successfully",
      data: slider,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating slider",
      status: 404,
    });
  }
};
