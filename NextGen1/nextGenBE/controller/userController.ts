import { Request, Response } from "express";
import userModel from "../model/userModel";
import { streamUpload } from "../utils/streamifier";
import cloudinary from "../utils/cloudinary";

export const createAdminAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password, schoolName, phoneNumber, avatar } = req.body;

    const userAccount = await userModel.create({
      name,
      email,
      password,
      schoolName,
      phoneNumber,
      avatar,
      status: "admin",
    });

    return res.status(201).json({
      message: "Admin Account created",
      data: userAccount,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};

export const createAccount = async (
  req: any,
  res: Response
): Promise<Response> => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      schoolName,
      phone,
      presentClass,
    } = req.body;

    const { secure_url }: any = await cloudinary.uploader.upload(req.file.path);

    const userAccount = await userModel.create({
      firstName,
      lastName,
      email,
      password,
      schoolName,
      phone,
      avatar: secure_url,
      presentClass,
    });

    return res.status(201).json({
      message: "Account created",
      data: userAccount,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};

export const loginAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const userAccount = await userModel.findOne({ email });

    if (userAccount) {
      if (userAccount.password === password) {
        return res.status(201).json({
          message: "Account created",
          data: userAccount,
          status: 201,
        });
      } else {
        return res.status(404).json({
          message: "Error with Password",
        });
      }
    } else {
      return res.status(404).json({
        message: "Error with Email",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};

export const stage1Score = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user: any = await userModel.findById(userID);
    const {
      name,
      option,
      pickedAt,
      time,
      point,
      school,
      stage,
      correct,
      questionID,
    } = req.body;
    //
    if (user) {
      const getResult = await userModel.findById(userID);

      const check = getResult?.stage1Result.some(
        (el: any) => el.questionID === questionID
      );

      if (check) {
        let getData = getResult?.stage1Result.find(
          (el: any) => el.questionID === questionID
        );
        // console.log("first approch: ", getData);

        getData = {
          name,
          option,
          pickedAt,
          time,
          point,
          school,
          stage,
          correct,
          questionID,
        };

        let x: any = getResult?.stage1Result.filter(
          (el: any) => el.questionID !== questionID
        );

        x.push(getData);

        const dataArray: any = await userModel.findByIdAndUpdate(
          userID,
          {
            stage1Result: x,
          },
          { new: true }
        );

        const readResult = await userModel.findByIdAndUpdate(
          userID,
          {
            stage1Score: dataArray?.stage1Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );

        return res.status(201).json({
          message: "result entered",
          data: readResult,
          status: 201,
        });
      } else {
        const updated = await userModel.findByIdAndUpdate(
          userID,
          {
            stage1Result: [
              ...user?.stage1Result,
              {
                questionID,
                name,
                option,
                pickedAt,
                time,
                point,
                school,
                stage,
                correct,
              },
            ],
          },
          { new: true }
        );

        await userModel.findByIdAndUpdate(
          userID,
          {
            stage1Score: updated?.stage1Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );
        return res.status(201).json({
          message: "result entered",
          data: updated,
          status: 201,
        });
      }
    } else {
      return res.status(404).json({
        message: "user doesn't exist",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error?.message,
    });
  }
};

export const stage2Score = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user: any = await userModel.findById(userID);
    const {
      name,
      option,
      pickedAt,
      time,
      point,
      school,
      stage,
      correct,
      questionID,
    } = req.body;
    //
    if (user) {
      const getResult = await userModel.findById(userID);

      const check = getResult?.stage2Result.some(
        (el: any) => el.questionID === questionID
      );

      if (check) {
        let getData = getResult?.stage2Result.find(
          (el: any) => el.questionID === questionID
        );

        getData = {
          name,
          option,
          pickedAt,
          time,
          point,
          school,
          stage,
          correct,
          questionID,
        };

        let x: any = getResult?.stage2Result.filter(
          (el: any) => el.questionID !== questionID
        );

        x.push(getData);

        const data = await userModel.findByIdAndUpdate(
          userID,
          {
            stage2Result: x,
          },
          { new: true }
        );

        const readResult = await userModel.findByIdAndUpdate(
          userID,
          {
            stage2Score: data?.stage2Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );

        return res.status(201).json({
          message: "result entered",
          data: readResult,
          status: 201,
        });
      } else {
        const updated: any = await userModel.findByIdAndUpdate(
          userID,
          {
            stage2Result: [
              ...user?.stage2Result,
              {
                questionID,
                name,
                option,
                pickedAt,
                time,
                point,
                school,
                stage,
                correct,
              },
            ],
          },
          { new: true }
        );

        await userModel.findByIdAndUpdate(
          userID,
          {
            stage2Score: updated?.stage2Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );
        return res.status(201).json({
          message: "result entered",
          data: updated,
          status: 201,
        });
      }
    } else {
      return res.status(404).json({
        message: "user doesn't exist",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error?.message,
    });
  }
};

export const stage3Score = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user: any = await userModel.findById(userID);
    const {
      name,
      option,
      pickedAt,
      time,
      point,
      school,
      stage,
      correct,
      questionID,
    } = req.body;
    //
    if (user) {
      const getResult = await userModel.findById(userID);

      const check = getResult?.stage3Result.some(
        (el: any) => el.questionID === questionID
      );

      if (check) {
        let getData = getResult?.stage3Result.find(
          (el: any) => el.questionID === questionID
        );

        getData = {
          name,
          option,
          pickedAt,
          time,
          point,
          school,
          stage,
          correct,
          questionID,
        };

        let x: any = getResult?.stage3Result.filter(
          (el: any) => el.questionID !== questionID
        );

        x.push(getData);

        const data = await userModel.findByIdAndUpdate(
          userID,
          {
            stage3Result: x,
          },
          { new: true }
        );

        const readResult = await userModel.findByIdAndUpdate(
          userID,
          {
            stage3Score: data?.stage3Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );

        return res.status(201).json({
          message: "result entered",
          data: readResult,
          status: 201,
        });
      } else {
        const updated: any = await userModel.findByIdAndUpdate(
          userID,
          {
            stage3Result: [
              ...user?.stage3Result,
              {
                questionID,
                name,
                option,
                pickedAt,
                time,
                point,
                school,
                stage,
                correct,
              },
            ],
          },
          { new: true }
        );

        await userModel.findByIdAndUpdate(
          userID,
          {
            stage3Score: updated?.stage3Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );

        return res.status(201).json({
          message: "result entered",
          data: updated,
          status: 201,
        });
      }
    } else {
      return res.status(404).json({
        message: "user doesn't exist",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error?.message,
    });
  }
};

export const stage4Score = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const user: any = await userModel.findById(userID);
    const {
      name,
      option,
      pickedAt,
      time,
      point,
      school,
      stage,
      correct,
      questionID,
    } = req.body;
    //
    if (user) {
      const getResult = await userModel.findById(userID);

      const check = getResult?.stage4Result.some(
        (el: any) => el.questionID === questionID
      );

      if (check) {
        let getData = getResult?.stage4Result.find(
          (el: any) => el.questionID === questionID
        );

        getData = {
          name,
          option,
          pickedAt,
          time,
          point,
          school,
          stage,
          correct,
          questionID,
        };

        let x: any = getResult?.stage4Result.filter(
          (el: any) => el.questionID !== questionID
        );

        x.push(getData);

        const data = await userModel.findByIdAndUpdate(
          userID,
          {
            stage4Result: x,
          },
          { new: true }
        );

        const readResult = await userModel.findByIdAndUpdate(
          userID,
          {
            stage4Score: data?.stage4Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );

        return res.status(201).json({
          message: "result entered",
          data: readResult,
          status: 201,
        });
      } else {
        const updated: any = await userModel.findByIdAndUpdate(
          userID,
          {
            stage4Result: [
              ...user?.stage4Result,
              {
                questionID,
                name,
                option,
                pickedAt,
                time,
                point,
                school,
                stage,
                correct,
              },
            ],
          },
          { new: true }
        );

        await userModel.findByIdAndUpdate(
          userID,
          {
            stage4Score: updated?.stage4Result
              .map((el: any) => el.point)
              .reduce((a: number, b: number) => {
                return a + b;
              }, 0),
          },
          { new: true }
        );
        return res.status(201).json({
          message: "result entered",
          data: updated,
          status: 201,
        });
      }
    } else {
      return res.status(404).json({
        message: "user doesn't exist",
      });
    }
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error?.message,
    });
  }
};

export const userAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const users = await userModel.find();

    return res.status(201).json({
      message: "get all users",
      data: users,
      status: 200,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};

export const readSingleAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const users = await userModel.findById(userID);

    return res.status(200).json({
      message: "get single user",
      data: users,
      status: 200,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};

export const deleteUserAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userID } = req.params;
    const users = await userModel.findByIdAndDelete(userID);

    return res.status(201).json({
      message: "user Deleted",
      data: users,
      status: 201,
    });
  } catch (error: any) {
    return res.status(404).json({
      message: "Error creating account",
      data: error,
    });
  }
};
