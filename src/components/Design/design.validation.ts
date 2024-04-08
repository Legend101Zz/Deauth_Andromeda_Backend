import Joi from 'joi';

// Joi schema for validating request body
const createDesignSchema = Joi.object({
  parentNftOwnerId: Joi.string()
    .required()
    .description('Owner ID of the parent NFT'),
  parentNftTokenId: Joi.string()
    .required()
    .description('Token ID of the parent NFT'),
  splitterAddr: Joi.string()
    .optional()
    .description('Splitter address')
    .allow(''),
  timelockAddr: Joi.string()
    .optional()
    .description('Timelock address')
    .allow(''),
});

// eslint-disable-next-line import/prefer-default-export
export { createDesignSchema };
