"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserAccount = exports.readSingleAccount = exports.userAccount = exports.stage4Score = exports.stage3Score = exports.stage2Score = exports.stage1Score = exports.loginAccount = exports.createAccount = exports.createAdminAccount = void 0;
const userModel_1 = __importDefault(require("../model/userModel"));
const cloudinary_1 = __importDefault(require("../utils/cloudinary"));
const createAdminAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, schoolName, phoneNumber, avatar } = req.body;
        const userAccount = yield userModel_1.default.create({
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
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.createAdminAccount = createAdminAccount;
const createAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password, schoolName, phone, presentClass, } = req.body;
        const { secure_url } = yield cloudinary_1.default.uploader.upload(req.file.path);
        const userAccount = yield userModel_1.default.create({
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
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.createAccount = createAccount;
const loginAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const userAccount = yield userModel_1.default.findOne({ email });
        if (userAccount) {
            if (userAccount.password === password) {
                return res.status(201).json({
                    message: "Account created",
                    data: userAccount,
                    status: 201,
                });
            }
            else {
                return res.status(404).json({
                    message: "Error with Password",
                });
            }
        }
        else {
            return res.status(404).json({
                message: "Error with Email",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.loginAccount = loginAccount;
const stage1Score = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        const { name, option, pickedAt, time, point, school, stage, correct, questionID, } = req.body;
        //
        if (user) {
            const getResult = yield userModel_1.default.findById(userID);
            const check = getResult === null || getResult === void 0 ? void 0 : getResult.stage1Result.some((el) => el.questionID === questionID);
            if (check) {
                let getData = getResult === null || getResult === void 0 ? void 0 : getResult.stage1Result.find((el) => el.questionID === questionID);
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
                let x = getResult === null || getResult === void 0 ? void 0 : getResult.stage1Result.filter((el) => el.questionID !== questionID);
                x.push(getData);
                const dataArray = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage1Result: x,
                }, { new: true });
                const readResult = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage1Score: dataArray === null || dataArray === void 0 ? void 0 : dataArray.stage1Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: readResult,
                    status: 201,
                });
            }
            else {
                const updated = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage1Result: [
                        ...user === null || user === void 0 ? void 0 : user.stage1Result,
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
                }, { new: true });
                yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage1Score: updated === null || updated === void 0 ? void 0 : updated.stage1Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: updated,
                    status: 201,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user doesn't exist",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.stage1Score = stage1Score;
const stage2Score = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        const { name, option, pickedAt, time, point, school, stage, correct, questionID, } = req.body;
        //
        if (user) {
            const getResult = yield userModel_1.default.findById(userID);
            const check = getResult === null || getResult === void 0 ? void 0 : getResult.stage2Result.some((el) => el.questionID === questionID);
            if (check) {
                let getData = getResult === null || getResult === void 0 ? void 0 : getResult.stage2Result.find((el) => el.questionID === questionID);
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
                let x = getResult === null || getResult === void 0 ? void 0 : getResult.stage2Result.filter((el) => el.questionID !== questionID);
                x.push(getData);
                const data = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage2Result: x,
                }, { new: true });
                const readResult = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage2Score: data === null || data === void 0 ? void 0 : data.stage2Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: readResult,
                    status: 201,
                });
            }
            else {
                const updated = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage2Result: [
                        ...user === null || user === void 0 ? void 0 : user.stage2Result,
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
                }, { new: true });
                yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage2Score: updated === null || updated === void 0 ? void 0 : updated.stage2Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: updated,
                    status: 201,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user doesn't exist",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.stage2Score = stage2Score;
const stage3Score = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        const { name, option, pickedAt, time, point, school, stage, correct, questionID, } = req.body;
        //
        if (user) {
            const getResult = yield userModel_1.default.findById(userID);
            const check = getResult === null || getResult === void 0 ? void 0 : getResult.stage3Result.some((el) => el.questionID === questionID);
            if (check) {
                let getData = getResult === null || getResult === void 0 ? void 0 : getResult.stage3Result.find((el) => el.questionID === questionID);
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
                let x = getResult === null || getResult === void 0 ? void 0 : getResult.stage3Result.filter((el) => el.questionID !== questionID);
                x.push(getData);
                const data = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage3Result: x,
                }, { new: true });
                const readResult = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage3Score: data === null || data === void 0 ? void 0 : data.stage3Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: readResult,
                    status: 201,
                });
            }
            else {
                const updated = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage3Result: [
                        ...user === null || user === void 0 ? void 0 : user.stage3Result,
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
                }, { new: true });
                yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage3Score: updated === null || updated === void 0 ? void 0 : updated.stage3Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: updated,
                    status: 201,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user doesn't exist",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.stage3Score = stage3Score;
const stage4Score = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield userModel_1.default.findById(userID);
        const { name, option, pickedAt, time, point, school, stage, correct, questionID, } = req.body;
        //
        if (user) {
            const getResult = yield userModel_1.default.findById(userID);
            const check = getResult === null || getResult === void 0 ? void 0 : getResult.stage4Result.some((el) => el.questionID === questionID);
            if (check) {
                let getData = getResult === null || getResult === void 0 ? void 0 : getResult.stage4Result.find((el) => el.questionID === questionID);
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
                let x = getResult === null || getResult === void 0 ? void 0 : getResult.stage4Result.filter((el) => el.questionID !== questionID);
                x.push(getData);
                const data = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage4Result: x,
                }, { new: true });
                const readResult = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage4Score: data === null || data === void 0 ? void 0 : data.stage4Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: readResult,
                    status: 201,
                });
            }
            else {
                const updated = yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage4Result: [
                        ...user === null || user === void 0 ? void 0 : user.stage4Result,
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
                }, { new: true });
                yield userModel_1.default.findByIdAndUpdate(userID, {
                    stage4Score: updated === null || updated === void 0 ? void 0 : updated.stage4Result.map((el) => el.point).reduce((a, b) => {
                        return a + b;
                    }, 0),
                }, { new: true });
                return res.status(201).json({
                    message: "result entered",
                    data: updated,
                    status: 201,
                });
            }
        }
        else {
            return res.status(404).json({
                message: "user doesn't exist",
            });
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error === null || error === void 0 ? void 0 : error.message,
        });
    }
});
exports.stage4Score = stage4Score;
const userAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.default.find();
        return res.status(201).json({
            message: "get all users",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.userAccount = userAccount;
const readSingleAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const users = yield userModel_1.default.findById(userID);
        return res.status(200).json({
            message: "get single user",
            data: users,
            status: 200,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.readSingleAccount = readSingleAccount;
const deleteUserAccount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const users = yield userModel_1.default.findByIdAndDelete(userID);
        return res.status(201).json({
            message: "user Deleted",
            data: users,
            status: 201,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating account",
            data: error,
        });
    }
});
exports.deleteUserAccount = deleteUserAccount;
