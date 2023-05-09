import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
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
});

const User = mongoose.model('User', UserSchema);

export default User;
