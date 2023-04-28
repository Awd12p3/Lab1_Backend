import express from 'express';
import userRouter from './users/users.router';
import restaurantRouter from './restaurants/restaurants.router';
import productRouter from './products/products.router';
import orderRouter from './orders/orders.router';
import mongoose from 'mongoose';

const app = express();
const port = 3001;

app.use(express.json());

app.use('/users', userRouter);
app.use('/restaurants', restaurantRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);

//DB connection
mongoose
  .connect('mongodb+srv://backend.n7wd2s4.mongodb.net/', {
    dbName: 'BackendLab',
    user: 'test',
    pass: 'test',
  })
  .then(() => console.log('database connected'))
  .catch((error) => console.log(error));

try {
  app.listen(port);
  console.log('server running on port ' + port);
} catch (error) {
  console.log(error);
}
