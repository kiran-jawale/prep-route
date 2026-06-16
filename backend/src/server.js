import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import connectDb from "./models/index.js";
import { app } from "./app.js";
import CONFIG from "./constants/config.js";

const PORT = CONFIG.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`[${CONFIG.APP_NAME}] Server started`);
      console.log(`Environment: ${CONFIG.NODE_ENV}`);
      console.log(`API Base: ${CONFIG.API_VERSION}`);
      console.log(`Port: ${PORT}`);
      console.log(`Serve Static: ${CONFIG.SERVE_STATIC}`);
    });
  })
  .catch((error) => {
    console.error("[DATABASE CONNECTION ERROR]", error);

    process.exit(1);
  });
