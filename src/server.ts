import express, { Request, Response } from "express";
import path from "path";

const app = express();
const port = 3000;

// __dirname não existe diretamente no ESModules do TypeScript,
// mas no CommonJS (o padrão do tsconfig) ele funciona normalmente.
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
