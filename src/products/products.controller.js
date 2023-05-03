//CREATE
export async function createProduct(req, res) {
  try {
    const product = req.body;
    req.body.active = true;
    const document = await productModel.create(product);
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//READ
export async function readProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findOne({ _id: id, active: true });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readProduct_RestOrCategory(req, res) {
  try {
    const { restaurant_id, category } = req.query;
    const filter = { active: true };

    if (restaurant_id) {
      filter.restaurant_id = restaurant_id;
    }

    if (category) {
      filter.category = category;
    }

    const documents = await productModel.find(filter);
    documents.length > 0 ? res.status(200).json(documents) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// UPDATE
export async function updateProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

// DELETE
export async function deleteProduct(req, res) {
  try {
    const id = req.params.id;
    const document = await productModel.findById(id);
    document.active = false;
    document.new = true;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
