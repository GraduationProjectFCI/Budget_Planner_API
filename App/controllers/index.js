const UserData = require("../modals/user_data_modal");

const update_user_data = async (req, res) => {
  const { spent, total } = req.body;
  const { user_id } = req.params;

  //update document with findOneAndUpdate

  const response = await UserData.findOneAndUpdate(
    { user_id },
    {
      spent,
      remaining: total - spent,
      total,
      updated_at: Date.now(),
    }
  );

  if (response) {
    res.json({
      status: 200,
      msg: "User Data Updated Successfully",
    });
  } else {
    res.json({
      status: 500,
      msg: "Something went wrong",
    });
  }
};

const get_user_data = (req, res) => {
  const { id } = req.params;
  UserData.find({ user_id: id })
    .then((data) => {
      res.json({
        status: 200,
        msg: "User Data Fetched Successfully",
        data,
      });
    })
    .catch((err) => {
      res.json({
        status: 500,
        msg: "Something went wrong",
      });
    });
};

module.exports = {
  update_user_data,
  get_user_data,
};
