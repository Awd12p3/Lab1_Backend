import userModel from './users.model';

//CREATE
export async function createUser(req, res) {
  try {
    const document = await userModel.create({ ...req.body, active: true });
    res.status(201).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//READ
export async function readUser(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findById(id);
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

export async function readUserByMailAndPassword(req, res) {
  try {
    const { mail, password } = req.params;
    const document = await userModel.findOne({
      mail: mail,
      password: password,
    });

    document ? res.status(200).json(document) : res.sendStatus(404);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

//UPDATE
export async function updateUser(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
//DELETE
export async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    const document = await userModel.findById(id);
    document.active = false;
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(400).json(error.message);
  }
}
