import { defineConfig } from '@prisma/config';

export default defineConfig({
  // Aqui você passa o URL do banco especificamente para MIGRATIONS
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
