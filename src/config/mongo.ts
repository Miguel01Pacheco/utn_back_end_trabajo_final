import mongoose from "mongoose"

process.loadEnvFile()

const URI_DB: string = process.env.URI_DB || "";

const connectDB = async (): Promise<void> => {
  try {
    if (!URI_DB) {
      throw new Error("La URI de la base de datos no está definida en las variables de entorno.");
    }

    await mongoose.connect(URI_DB); // No es necesario especificar opciones como useNewUrlParser
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectarse a MongoDB:", (error as Error).message);
    process.exit(1); // Finaliza el proceso si ocurre un error
  }
};

export { connectDB };
