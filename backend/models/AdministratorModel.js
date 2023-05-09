import mongoose from 'mongoose';

const administratorSchema = new mongoose.Schema({
  username: {
    type: 'string',
    required: true,
  },
  password: {
    type: 'string',
    minLength: 6,
    required: true,
  },
});

const Administrator = mongoose.model('Administrator', administratorSchema);

export default Administrator;
