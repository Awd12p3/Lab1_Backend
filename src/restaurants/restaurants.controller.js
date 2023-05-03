// CREATE
export async function createRestaurant(req, res) {
  try {
    const restaurant = req.body;
    req.body.active = true;
    const document = await restaurantModel.create(restaurant);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// READ
export async function readRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readRestaurant_NameOrCat(req, res) {
  try {
    const { name, categories } = req.query;
    const filter = { active: true };

    if (name) {
      filter.name = { $regex: name, $options: 'i' };
    }

    if (categories) {
      filter.categories = { $in: categories.split(',') };
    }

    const documents = await restaurantModel.find(filter);
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// UPDATE
export async function updateRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// DELETE
export async function deleteRestaurant(req, res) {
  try {
    const id = req.params.id;
    const document = await restaurantModel.findById(id);
    document.active = false;
    document.new = true;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
