import { Router } from "express";
import { LeisureAreaController } from "../controller/leisureArea.controller";

const leisureRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: LeisureArea
 *   description: Rotas para áreas de lazer
 */

/**
 * @swagger
 * /leisure-area:
 *   post:
 *     summary: Cria uma área de lazer
 *     tags: [LeisureArea]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               capacity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Área de lazer criada com sucesso
 */
leisureRoutes.post("/", LeisureAreaController.create);

/**
 * @swagger
 * /leisure-area:
 *   get:
 *     summary: Lista todas as áreas de lazer
 *     tags: [LeisureArea]
 *     responses:
 *       200:
 *         description: Lista retornada
 */
leisureRoutes.get("/", LeisureAreaController.list);

/**
 * @swagger
 * /leisure-area/{id}:
 *   put:
 *     summary: Atualiza uma área de lazer
 *     tags: [LeisureArea]
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
 *             type: object
 *     responses:
 *       200:
 *         description: Área de lazer atualizada
 */
leisureRoutes.put("/:id", LeisureAreaController.update);

/**
 * @swagger
 * /leisure-area/{id}:
 *   delete:
 *     summary: Deleta uma área de lazer
 *     tags: [LeisureArea]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Área removida
 */
leisureRoutes.delete("/:id", LeisureAreaController.delete);


export { leisureRoutes };

