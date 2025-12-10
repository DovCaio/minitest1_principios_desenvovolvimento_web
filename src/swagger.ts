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
  apis: ["./routes/*.ts"], // Arquivos onde você coloca as anotações
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
