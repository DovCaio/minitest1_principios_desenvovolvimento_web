import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Express + Prisma",
      version: "1.0.0",
    },
  },
  apis: ["./**/*route.ts"], //Sei que não é a melhor forma, mas funciona por enquanto
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };