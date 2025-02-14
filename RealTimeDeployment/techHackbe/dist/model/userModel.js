"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    verifiedToken: {
        type: String,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    avatar: {
        type: String,
    },
    avatarID: {
        type: String,
    },
    otp: {
        type: String,
    },
    otpExpiresAt: {
        type: String,
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("user", userModel);
