import request from "supertest";
import app from "../src/app"; // seu Express
import prisma from "../src/prisma";
import { resetDatabase } from "../src/prisma";
describe("Employee Integration Tests", () => {
  afterAll(async () => {
    await resetDatabase();
  });

  describe("CRUD", () => {

    it("should create an lot", async () => {
        const payload = {
            intercom: "A123",
        }
        const response = await request(app)
            .post("/lot")
            .send(payload)
            .expect(201);

    });

  })

});