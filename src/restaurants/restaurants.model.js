import { Schema, model } from 'mongoose';

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    categories: {
      type: [String],
      validate: {
        validator: function (array) {
          return array && array.length > 0;
        },
        message: 'Ingrese 1 o más categorías',
      },
    },
    inventory: { type: Array, required: false },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const restaurantModel = model('restaurants', restaurantSchema);

export default restaurantModel;
