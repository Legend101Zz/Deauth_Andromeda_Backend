import mongoose, { Schema, Document } from 'mongoose';

const ChildNftSchema = new Schema({
  owner: String,
  token_id: String,
});

const ParentNftSchema = new Schema({
  token_id: String,
  child_nft: [ChildNftSchema],
});

export interface IDesign extends Document {
  parent_nft: {
    token_id: string;
    child_nft: Array<{
      owner: string;
      token_id: string;
    }>;
  };
  splitter_addr: string;
  timelock_addr: string;
}

const DesignSchema: Schema = new Schema({
  parent_nft: ParentNftSchema,
  splitter_addr: String,
  timelock_addr: String,
});

// Function to add a child NFT to the parent NFT
DesignSchema.methods.addChildNft = function (owner: string, token_id: string) {
  this.parent_nft.child_nft.push({ owner, token_id });
};

// Create and export the model
export const Design = mongoose.model<IDesign>('Design', DesignSchema);
