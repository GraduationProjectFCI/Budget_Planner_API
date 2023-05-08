const UserData = require("../modals/user_data_modal");
const Labels = require("../modals/LabelSchema");
const Sheets = require("../modals/sheetSchema");
const Statistics = require("../modals/statesSchema");
const Deadlines = require("../modals/deadlineSchema");

const addDeadline = (req, res) => {
  const errorLog = [];
  const { user_id, deadline_name, deadline_date, deadline_value } = req.body;

  if (!user_id) {
    errorLog.push("user_id is required");
  }
  if (!deadline_name) {
    errorLog.push("deadline_name is required");
  }
  if (!deadline_date) {
    errorLog.push("deadline_date is required");
  }
  if (!deadline_value) {
    errorLog.push("deadline_value is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    const newDeadline = new Deadlines({
      user_id,
      deadline_name,
      deadline_date,
      deadline_value,
    });
    newDeadline
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Deadline Added Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const getOneDeadLine = (req, res) => {
  const errorLog = [];
  const { deadline_id } = req.params;

  if (!deadline_id) {
    errorLog.push("deadline_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Deadlines.findOne({ _id: deadline_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Deadline Fetched Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const getDeadlines = (req, res) => {
  const errorLog = [];
  const { user_id } = req.params;

  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Deadlines.find({ user_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Deadline Fetched Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const updateDeadline = (req, res) => {
  const errorLog = [];

  const { deadline_id } = req.params;
  const { deadline_name, deadline_date, deadline_value } = req.body;

  if (!deadline_id) {
    errorLog.push("deadline_id is required");
  }
  if (!deadline_name) {
    errorLog.push("deadline_name is required");
  }
  if (!deadline_date) {
    errorLog.push("deadline_date is required");
  }
  if (!deadline_value) {
    errorLog.push("deadline_value is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Deadlines.updateOne(
      { _id: deadline_id },
      { deadline_name, deadline_date, deadline_value }
    )
      .then((data) => {
        res.json({
          status: 200,
          msg: "Deadline Updated Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const deleteDeadline = (req, res) => {
  const errorLog = [];
  const { deadline_id } = req.params;

  if (!deadline_id) {
    errorLog.push("deadline_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Deadlines.deleteOne({ _id: deadline_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Deadline Deleted Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const getStatistics = (req, res) => {
  const errorLog = [];
  const { user_id } = req.body;

  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Statistics.find({ user_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Statistics Fetched Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const addStatistics = (req, res) => {
  const errorLog = [];
  const { user_id, label_name, value } = req.body;

  if (!user_id) {
    errorLog.push("user_id is required");
  }
  if (!label_name) {
    errorLog.push("label_name is required");
  }
  if (!value) {
    errorLog.push("value is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    const newStatistics = new Statistics({
      user_id,
      label_name,
      value,
    });
    newStatistics
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Statistics Added Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const addSheets = (req, res) => {
  const errorLog = [];
  const { user_id, sheet_type } = req.body;
  if (!user_id) {
    errorLog.push("user_id is required");
  }
  if (!sheet_type) {
    errorLog.push("sheet_type is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    const newSheet = new Sheets({
      user_id,
      sheet_type,
    });
    newSheet
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Sheet Added Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const getSheets = (req, res) => {
  const errorLog = [];
  const { user_id } = req.body;

  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Sheets.find({ user_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Sheets Fetched Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const deleteSheets = (req, res) => {
  const errorLog = [];
  const { sheet_id } = req.params;

  if (!sheet_id) {
    errorLog.push("sheet_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Sheets.findByIdAndDelete(sheet_id)
      .then((data) => {
        res.json({
          status: 200,
          msg: "Sheet Deleted Successfully",
          data,
        });
      })

      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const updateSheet = async (req, res) => {
  const errorLog = [];

  const { sheet_id } = req.params;
  const { sheet_type } = req.body;

  if (!sheet_id) {
    errorLog.push("sheet_id is required");
  }
  if (!sheet_type) {
    errorLog.push("sheet_type is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    const response = await Sheets.findByIdAndUpdate(sheet_id, {
      sheet_type,
      updated_at: Date.now(),
    });
    if (response) {
      res.json({
        status: 200,
        msg: "Sheet Updated Successfully",
      });
    } else {
      res.json({
        status: 500,
        msg: "Something went wrong",
      });
    }
  }
};

const addLabels = (req, res) => {
  const errorLog = [];
  const { user_id, label } = req.body;
  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (!label) {
    errorLog.push("label is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    const newLabel = new Labels({
      user_id,
      label,
    });
    newLabel
      .save()
      .then((data) => {
        res.json({
          status: 200,
          msg: "Label Added Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const getLabels = (req, res) => {
  const errorLog = [];
  const { user_id } = req.body;
  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Labels.find({ user_id })
      .then((data) => {
        res.json({
          status: 200,
          msg: "Labels Fetched Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const deleteLabels = (req, res) => {
  const errorLog = [];
  const { label_id } = req.params;

  if (!label_id) {
    errorLog.push("label_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
    Labels.findByIdAndDelete(label_id)
      .then((data) => {
        res.json({
          status: 200,
          msg: "Label Deleted Successfully",
          data,
        });
      })
      .catch((err) => {
        res.json({
          status: 500,
          msg: "Something went wrong",
        });
      });
  }
};

const update_user_data = async (req, res) => {
  const errorLog = [];

  const { spent, total } = req.body;
  const { user_id } = req.params;

  if (!spent) {
    errorLog.push("spent is required");
  }

  if (!total) {
    errorLog.push("total is required");
  }

  if (!user_id) {
    errorLog.push("user_id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
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
  }
};

const get_user_data = (req, res) => {
  const errorLog = [];

  const { id } = req.params;

  if (!id) {
    errorLog.push("id is required");
  }

  if (errorLog.length > 0) {
    res.json({
      status: 400,
      msg: "Bad Request",
      errorLog,
    });
  } else {
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
  }
};

module.exports = {
  update_user_data,
  get_user_data,
  addLabels,
  getLabels,
  deleteLabels,
  getSheets,
  addSheets,
  deleteSheets,
  updateSheet,
  getStatistics,
  addStatistics,
  addDeadline,
  getDeadlines,
  deleteDeadline,
  updateDeadline,
  getOneDeadLine,
};
