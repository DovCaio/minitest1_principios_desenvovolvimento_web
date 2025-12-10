import { Router } from "express";
import { LotController } from "../controller/lot.controller";


const useRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Lots
 *   description: Endpoints relacionados a lotes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Lot:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         intercom:
 *           type: string
 *         responsibleId:
 *           type: integer
 *           nullable: true
 *       example:
 *         id: 1
 *         intercom: "A12"
 *         responsibleId: 3
 *
 *     CreateLotDto:
 *       type: object
 *       required:
 *         - intercom
 *       properties:
 *         intercom:
 *           type: string
 *         responsibleId:
 *           type: integer
 *           nullable: true
 *       example:
 *         intercom: "B22"
 *         responsibleId: 5
 *
 *     UpdateLotDto:
 *       type: object
 *       properties:
 *         intercom:
 *           type: string
 *         responsibleId:
 *           type: integer
 *           nullable: true
 *       example:
 *         intercom: "A99"
 */


/**
 * @swagger
 * /lot:
 *   post:
 *     summary: Cria um novo lote
 *     tags: [Lots]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateLotDto'
 *     responses:
 *       201:
 *         description: Lote criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lot'
 */
useRouter.post("/", LotController.create);

/**
 * @swagger
 * /lot/{id}:
 *   put:
 *     summary: Atualiza um lote
 *     tags: [Lots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateLotDto'
 *     responses:
 *       200:
 *         description: Lote atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lot'
 */
useRouter.put("/:id", LotController.update);

/**
 * @swagger
 * /lot/{id}:
 *   get:
 *     summary: Retorna um lote pelo ID
 *     tags: [Lots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Dados do lote
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lot'
 */
useRouter.get("/:id", LotController.get);

/**
 * @swagger
 * /lot:
 *   get:
 *     summary: Lista todos os lotes
 *     tags: [Lots]
 *     responses:
 *       200:
 *         description: Lista de lotes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lot'
 */
useRouter.get("/", LotController.getAll);

/**
 * @swagger
 * /lot/{id}:
 *   delete:
 *     summary: Deleta um lote
 *     tags: [Lots]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Lote deletado com sucesso
 */
useRouter.delete("/:id", LotController.delete);



export default useRouter;
