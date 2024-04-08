import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  wallet_addr: string;
  cart_nfts: Array<{
    token_id: string;
    cw721_addr: string;
  }>;
}

const UserSchema: Schema<IUser> = new Schema({
  wallet_addr: { type: String, required: true },
  cart_nfts: [
    {
      token_id: { type: String, required: true },
      cw721_addr: { type: String, required: true },
    },
  ],
});

export const User: Model<IUser> = mongoose.model<IUser>('User', UserSchema);
