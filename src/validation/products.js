import Joi from 'joi';
import {categoryList} from '../constants/index.js';

export const createProductSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().required(),
    category: Joi.string().valid(...categoryList).required(),
    description: Joi.string(),
});

export const updateProductSchema = Joi.object({
    name: Joi.string().min(3).max(30),
    price: Joi.number(),
    category: Joi.string().valid(...categoryList),
    description: Joi.string(),
});
