import { Request, Response } from 'express';
import logger from '@core/utils/logger';
import { Designer } from './designer.model';

const createDesigner = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { wallet_addr, marketplace_addr } = req.body;

    // Check if designer with provided wallet address already exists
    const existingDesigner = await Designer.findOne({ wallet_addr });
    if (existingDesigner) {
      return res.status(400).json({
        message: 'Designer with provided wallet address already exists',
      });
    }

    // Create new designer
    const designer = new Designer({
      designs: [], // Assuming initially no designs are associated
      wallet_addr,
      marketplace_addr,
    });

    // Save the designer to the database
    await designer.save();

    return res
      .status(201)
      .json({ message: 'Designer created successfully', designer });
  } catch (error) {
    logger.error('Error creating designer:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { createDesigner };
