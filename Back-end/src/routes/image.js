const { Router } = require("express");

const router = Router();

const path = require("path");
const multer = require("multer");
const fs = require("fs");

// RENDER FORM UPLOAD

const storage = multer.diskStorage({
  destination: "./public/images/",
  filename: function(req, file, cb) {
    cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000000 }
});

router.post("/image", upload.single("profilePhoto"), async (req, res) => {
  fs.readFile(req.file.path, (err, contents) => {
    if (err) {
      res.status(500).send();
    } else {
      var path = req.file.path;
      res.status(201).send({ path });
    }
  });
});

module.exports = router;
