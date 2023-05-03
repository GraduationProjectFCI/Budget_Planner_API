const appHttp = require("../connection/app");
const authHttp = require("../connection/auth");

const validate = async (req, res) => {
  //get the token from req headers

  if (!req.headers.authorization) {
    res.status(401).json({ msg: "Unauthorized" });
  } else {
    const token = req.headers.authorization.split(" ")[1];
    const response = await authHttp.post("/validate", { token });
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }
};

const getUserData = async (req, res) => {
  if (await validate(req, res)) {
    const response = await appHttp.get(`user-data/${req.params.user_id}`);
    res.status(response.data.status).send(response.data);
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

const updateUserData = async (req, res) => {
  if (await validate(req, res)) {
    const response = await appHttp.patch(
      `user-data/${req.params.user_id}`,
      req.body
    );

    res.status(response.data.status).send(response.data);
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = {
  getUserData,
  updateUserData,
};
