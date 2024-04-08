import mongoose from 'mongoose';

export interface IDesigner {
  _id: mongoose.Schema.Types.ObjectId;
  designs: mongoose.Schema.Types.ObjectId[];
  wallet_addr: string;
  marketplace_addr: string;
}
