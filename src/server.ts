import app from "./app";
import { swaggerUi, swaggerSpec } from "./swagger";
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Swagger running at http://localhost:${port}/api-docs`);
});
