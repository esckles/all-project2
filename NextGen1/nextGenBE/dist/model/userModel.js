"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userModel = new mongoose_1.Schema({
    status: {
        type: String,
        default: "student",
    },
    presentClass: {
        type: String,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    schoolName: {
        type: String,
    },
    phone: {
        type: String,
        default: "080",
    },
    avatar: {
        type: String,
    },
    stage1Score: {
        type: Number,
        default: 0,
    },
    stage2Score: {
        type: Number,
        default: 0,
    },
    stage3Score: {
        type: Number,
        default: 0,
    },
    stage4Score: {
        type: Number,
        default: 0,
    },
    stage1Result: {
        type: [],
    },
    stage2Result: {
        type: [],
    },
    stage3Result: {
        type: [],
    },
    stage4Result: {
        type: [],
    },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("users", userModel);
