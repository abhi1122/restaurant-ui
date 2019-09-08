var multer = require('multer');
var path = require('path')
var Jimp = require('jimp');
var { imageUploadConfig } = require("../../config/constants");
var { errorResponseHandler } = require("../utils/helper");


var fileUploadConfig = (name = imageUploadConfig.name, allowFiles = imageUploadConfig.files, destination = imageUploadConfig.destination) => {
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, destination)
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })

  var fileFilter = function (req, file, cb) {
    console.log(path.extname(file.originalname));
    if (imageUploadConfig.extensions.indexOf(path.extname(file.originalname)).toLowerCase === -1) {
      return cb(new Error('Only images are allowed'))
    }

    cb(null, true)
  }

  var upload = multer({
    fileFilter: fileFilter,
    storage: storage,
    limits: { fileSize: imageUploadConfig.fileSize, files: allowFiles }
  }).array(name, allowFiles);

  return upload;
}

var imageUploader = (req, keyName, allowImage) => {
  return new Promise(function (resolve, reject) {
    var upload = fileUploadConfig(keyName, allowImage,destination);
    upload(req, {}, function (err) {
      console.log(err);
      if (err instanceof multer.MulterError) {
        reject(errorResponseHandler(err, "message"));
      } else if (err) {
        reject(errorResponseHandler(err, "message"));
      }
      imageCrop(req.files).then((returnData) => {
        resolve(returnData);
      });
    });
  });
}


var imageCrop = (images) => {
  return new Promise(function (resolveCrop, rejectCrop) {
    let imageResizeArr = [], imageResize, filePath, finalObj = {}, finalImageArr = [];
    images.map((obj) => {
      filePath = "./" + obj["destination"] + obj["filename"];
      imageResize = new Promise((resolve, reject) => {
        Jimp.read(filePath).then(image => {
          for (key in imageUploadConfig.resizeArr) {
            let width = imageUploadConfig.resizeArr[key]["width"];
            let height = imageUploadConfig.resizeArr[key]["height"];
            image.resize(width, height).write("./" + obj["destination"] + key + "-" + obj["filename"]);
            finalObj[key] = obj["destination"] + key + "-" + obj["filename"];
          }
          finalImageArr.push(finalObj);
        })
          .then(image => {
            resolve(finalImageArr);
          })
          .catch(err => {
            reject(err);
          });
      });
      imageResizeArr.push(imageResize);
    });

    Promise.all(imageResizeArr).then(values => {
      resolveCrop(finalImageArr);
    }).catch(err => {
      reject(err);
    });
  });
}

module.exports = {
  fileUploadConfig,
  imageUploader
};
