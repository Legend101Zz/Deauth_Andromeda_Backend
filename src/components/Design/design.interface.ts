import mongoose from 'mongoose';

export interface IDesign {
  _id: mongoose.Schema.Types.ObjectId;
  parent_nft: {
    token_id: String;
    child_nft: [
      {
        owner: String;
        token_id: String;
      },
    ];
  };
  splitter_addr: String;
  timelock_addr: String;
}
