import { Document, model, Schema } from 'mongoose';

interface LogDocument extends Document {
  _id?: number;
  url: string;
  method: string;
  query: string;
  date: Date;
}

const logSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  method: {
    type: String,
    required: true
  },
  query: {
    type: String,
    required: true,
    default: '{}'
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  }
});

export default model<LogDocument>('Log', logSchema);
