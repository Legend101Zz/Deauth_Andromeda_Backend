import mongoose, { Schema, Document, Model } from 'mongoose';

interface IChildNft {
  owner: string;
  token_id: string;
}
interface IReferenceNft {
  owner: string;
  token_id: string;
}

interface IParentNft {
  owner: string;
  token_id: string;
  child_nft: IChildNft[];
  reference_nft: IReferenceNft;
}

export interface IDesign extends Document {
  parent_nft: IParentNft;
  splitter_addr: string;
  timelock_addr: string;
  addChildNft: (owner: string, token_id: string) => void; // Define the method signature
}

const ChildNftSchema = new Schema<IChildNft>({
  owner: String,
  token_id: String,
});

const ParentNftSchema = new Schema<IParentNft>({
  owner: String,
  token_id: String,
  child_nft: [ChildNftSchema],
});

const DesignSchema = new Schema<IDesign>({
  parent_nft: ParentNftSchema,
  splitter_addr: String,
  timelock_addr: String,
});

// Define the method to add a child NFT to the parent NFT
DesignSchema.methods.addChildNft = function (
  this: IDesign,
  owner: string,
  token_id: string,
) {
  this.parent_nft.child_nft.push({ owner, token_id });
};

export const Design: Model<IDesign> = mongoose.model<IDesign>(
  'Design',
  DesignSchema,
);
