import request from "supertest";
import app from "../src/app"; // seu Express
import  prisma  from "../src/prisma";
import { resetDatabase } from "../src/prisma";

describe("Employee Integration Tests", () => {
    afterAll(() => {
        resetDatabase()

    })


    describe("CRUD", () => {


        it("should create an employee with linked user", async () => {
          
          const payload = {
            cpf: "55544433322",
            phone: "11988887777",
            name: "Alice Johnson",
            userType: "EMPLOYEE",
            employeeType: "GateEmployee"
          };
      
          const response = await request(app)
            .post("/employees")
            .send(payload);
      
          // Verificações da resposta
          expect(response.status).toBe(200);
          expect(response.body.user.cpf).toBe(payload.cpf);
          expect(response.body.employeeType).toBe(payload.employeeType);
      
          // Verifica no banco
          const employee = await prisma.employee.findFirst({
            where: {
              user: {
                cpf: payload.cpf
              }
            },
            include: { user: true }
          });
      
          expect(employee).not.toBeNull();
          expect(employee?.employeeType).toBe("GateEmployee");
          expect(employee?.user.name).toBe("Alice Johnson");
        });
    })
});
