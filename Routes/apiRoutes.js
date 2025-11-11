import {getAllData} from '../controllers/getAllData.js';
import {getDataByPathParams} from '../controllers/getDataByPathParams.js';
import express from 'express';

export const router = express.Router();

router.get('/', getAllData);
router.get('/:field/:terms', getDataByPathParams);