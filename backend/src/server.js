import dotenv from "dotenv";
import connectDb from "./models/index.js";
import { app } from "./app.js";
import CONFIG  from './constants/config.js'

dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}${CONFIG.API_VERSION}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
