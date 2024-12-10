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
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
process.loadEnvFile();
const JWT_SECRET = process.env.JWT_SECRET || "";
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { versionKey: false });
const User = mongoose_1.default.model("user", userSchema);
const register = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(data.password, 10);
        const newUser = new User({ username: data.username, password: hashedPassword });
        yield newUser.save();
        return newUser;
    }
    catch (error) {
        throw new Error("Error al registrar un nuevo usuario");
    }
});
const login = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findOne({ username: data.username });
        if (!user || !(yield bcryptjs_1.default.compare(data.password, user.password))) {
            throw new Error("El usuario o la contraseña son incorrectas");
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });
        return token;
    }
    catch (error) {
        throw new Error("Error al iniciar sesión");
    }
});
exports.default = { User, register, login };
