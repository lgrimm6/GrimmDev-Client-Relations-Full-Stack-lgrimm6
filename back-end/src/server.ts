import "dotenv/config";

import app from "./app";
import AppDataSource from "./data-source";

(async () => {
  await AppDataSource.initialize().catch((err) => {
    console.log("Error during Data initialization", err);
  });

  app.listen(process.env.PORT_API, () => {
    console.log(`Server runnig port ${process.env.PORT_API} ...`);
  });
})();
