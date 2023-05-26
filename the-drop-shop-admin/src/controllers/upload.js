const upload = require("../middleware/upload");

const uploadFiles = async (req, res) => {
  try {
    await upload(req, res);

    if (req.files == undefined) {
      return res.send({
        message: "You must select a file.",
      });
    }

    return res.send({
      message: "Product has been uploaded.",
    });
  } catch (error) {
    console.log(error);

    return res.send({
      message: `Error when trying upload product: ${error}`,
    });
  }
};

module.exports = {
  uploadFiles
};