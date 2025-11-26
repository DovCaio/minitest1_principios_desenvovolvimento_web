import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function resetDatabase() {
  const tables = [
    "Visitor",
    "Employee",
    "Resident",
    "User",
    "Lot"
  ];

  // Gera: TRUNCATE "Visitante", "Employee", ... CASCADE;
  const truncateQuery = `
    TRUNCATE TABLE ${tables.map(t => `"${t}"`).join(", ")} CASCADE;
  `;

  await prisma.$executeRawUnsafe(truncateQuery);
}


export default prisma;
