import { Schema, model } from 'mongoose';

const orderSchema = new Schema(
  {
    user_id: { type: String, required: true },
    restaurant_id: { type: String, required: true },
    state: {
      type: String,
      required: true,
      enum: ['Creado', 'Enviado', 'Aceptado', 'Recibido', 'En direccion', 'Realizado'],
    },
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const orderModel = model('orders', orderSchema);

export default orderModel;
