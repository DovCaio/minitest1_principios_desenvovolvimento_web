import { Router } from "express";
import { ResidentController } from "../controller/resident.controller";

const useRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Resident
 *   description: Rotas de moradores
 */

/**
 * @swagger
 * /resident:
 *   post:
 *     summary: Cria um morador
 *     tags: [Resident]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Morador criado com sucesso
 */
useRouter.post("/", ResidentController.create);

/**
 * @swagger
 * /resident/{cpf}:
 *   put:
 *     summary: Atualiza um morador
 *     tags: [Resident]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Morador atualizado
 */
useRouter.put("/:cpf", ResidentController.update);

/**
 * @swagger
 * /resident/{cpf}:
 *   get:
 *     summary: Obtém um morador pelo CPF
 *     tags: [Resident]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados retornados
 */
useRouter.get("/:cpf", ResidentController.getOne);

/**
 * @swagger
 * /resident:
 *   get:
 *     summary: Lista todos os moradores
 *     tags: [Resident]
 *     responses:
 *       200:
 *         description: Lista de moradores retornada
 */
useRouter.get("/", ResidentController.getAll);

/**
 * @swagger
 * /resident/{cpf}:
 *   delete:
 *     summary: Deleta um morador
 *     tags: [Resident]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Deletado com sucesso
 */
useRouter.delete("/:cpf", ResidentController.delete);


export default useRouter;
