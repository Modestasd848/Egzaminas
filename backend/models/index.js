import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 100,
    required: true,
  },
  lastName: {
    type: String,
    minLength: 3,
    maxLength: 100,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  registrationDate: {
    type: Date,
    required: true,
  },
});

export default mongoose.model('User', userSchema);
