"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainApp = void 0;
const mainApp = (app) => {
    try {
        app.use("/api");
        app.get("/", (req, res) => {
            try {
                res.status(200).json({ message: "Welcome to Auth API", status: 200 });
            }
            catch (error) {
                res.status(404).json({ message: "Error to Auth API", status: 404 });
            }
        });
    }
    catch (error) {
        return error;
    }
};
exports.mainApp = mainApp;
