//CREATE
export async function createOrder(req, res) {
  try {
    const order = req.body;
    req.body.active = true;
    const document = await orderModel.create(order);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//READ
export async function readOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// usuario proveído, enviados por el usuario proveído, pedidos a un restaurante proveído, y/o entre las fechas proveídas.

export async function readOrder_User_Rest_Dates(req, res) {
  try {
    const { user_id, restaurant_id, initial_date, final_date } = req.query;
    const filter = {
      active: true,
    };

    if (user_id) {
      filter.user_id = user_id;
    }

    if (restaurant_id) {
      filter.restaurant_id = restaurant_id;
    }

    if (initial_date && final_date) {
      filter.createdAt = {
        $gte: new Date(initial_date),
        $lt: new Date(final_date),
      };
    }
    const documents = await orderModel.find(filter);
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//Enviados pero sin aceptar
export async function readOrder_Sent(res) {
  try {
    const document = await orderModel.find({
      state: 'Enviado',
      active: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//UPDATE
export async function updateOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findOneAndUpdate(
      { _id: id, state: 'Creado', active: true },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//DELETE
export async function deleteOrder(req, res) {
  try {
    const id = req.params.id;
    const document = await orderModel.findById(id);
    document.active = false;
    document.new = true;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
