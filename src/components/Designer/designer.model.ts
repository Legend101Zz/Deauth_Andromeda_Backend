import mongoose, { Schema, Document, Model } from 'mongoose';
import { IDesign } from '@components/Design/design.model';

export interface IDesigner extends Document {
  designs: Array<IDesign['_id']>;
  wallet_addr: string;
  cw721_addr: string;
  associated_marketplace_addr: string;
}

const DesignerSchema: Schema<IDesigner> = new Schema({
  designs: [{ type: Schema.Types.ObjectId, ref: 'Design', required: true }],
  wallet_addr: { type: String, required: true },
  cw721_addr: { type: String, required: true },
  associated_marketplace_addr: { type: String, required: true },
});

export const Designer: Model<IDesigner> = mongoose.model<IDesigner>(
  'Designer',
  DesignerSchema,
);
