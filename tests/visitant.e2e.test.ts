import request from "supertest";
import app from "../src/app"; // seu Express
import prisma from "../src/prisma";
import { resetDatabase } from "../src/prisma";

describe("Employee Integration Tests", () => {
  afterAll(async () => {
    await resetDatabase();
  });

  describe("CRUD", () => {
    it("should create an employee with linked user", async () => {
      const payload = {
        cpf: "00044433321",
        phone: "11988887777",
        name: "Nolan Smith",
        userType: "VISITOR",
      };

      const response = await request(app).post("/visitor").send(payload);

      expect(response.status).toBe(201);
      expect(response.body.user.cpf).toBe(payload.cpf);
      expect(response.body.user.userType).toBe(
        payload.userType
      );

      const visitor = await prisma.visitor.findFirst({
        where: {
          user: {
            cpf: payload.cpf,
          },
        },
        include: { user: true },
      });

      expect(visitor).not.toBeNull();
      expect(visitor?.user.name).toBe(payload.name);
      expect(visitor?.user.userType).toBe("VISITOR");
    });

    
  });

});