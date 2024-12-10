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
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
process.loadEnvFile();
const URI_DB = process.env.URI_DB || "";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!URI_DB) {
            throw new Error("La URI de la base de datos no está definida en las variables de entorno.");
        }
        yield mongoose_1.default.connect(URI_DB); // No es necesario especificar opciones como useNewUrlParser
        console.log("Conexión exitosa a la base de datos");
    }
    catch (error) {
        console.error("Error al conectarse a MongoDB:", error.message);
        process.exit(1); // Finaliza el proceso si ocurre un error
    }
});
exports.connectDB = connectDB;