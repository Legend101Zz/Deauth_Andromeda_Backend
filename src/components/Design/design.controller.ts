import { Designer } from '@components/Designer/designer.model';
import logger from '@core/utils/logger';
import { Request, Response } from 'express';
import { Design, IDesign } from './design.model';

// Controller function to create a new design and associate it with a designer
const createDesignAndAssociateDesigner = async (
  req: Request,
  res: Response,
) => {
  try {
    // Extract necessary data from the request body
    const { parentNftOwnerId, parentNftTokenId, splitterAddr, timelockAddr } =
      req.body;

    // Find the designer in the database using the owner string
    const designer = await Designer.findOne({ wallet_addr: parentNftOwnerId });

    if (!designer) {
      // Return success response with the newly created design
      return res.status(201).json({
        message: 'Designer does not exist',
      });
    }

    // Create a new design document
    const designData: Partial<IDesign> = {
      parent_nft: {
        owner: parentNftOwnerId,
        token_id: parentNftTokenId,
        child_nft: [], // Initially empty child NFT array
      },
      splitter_addr: splitterAddr || '', // Use provided value or default to empty string
      timelock_addr: timelockAddr || '', // Use provided value or default to empty string
    };

    const newDesign = new Design(designData);

    // Save the new design to the database
    const savedDesign = await newDesign.save();

    // If designer found, add the design to the designer's designs array
    // eslint-disable-next-line no-underscore-dangle
    designer.designs.push(savedDesign._id);
    await designer.save();

    // Return success response with the newly created design
    return res.status(201).json({
      message: 'Design created and associated with designer successfully',
      design: savedDesign,
    });
  } catch (error) {
    // Handle errors
    logger.error('Error creating design:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

// eslint-disable-next-line import/prefer-default-export
export { createDesignAndAssociateDesigner };
