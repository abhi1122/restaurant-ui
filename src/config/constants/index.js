module.exports = {
    imageUploadConfig: {
        extensions: [".jpg", ".jpeg", "png"],
        destination: "public/common",
        fileSize: 3145728,
        files: 2,
        name: "image",
        resizeArr: { "sm": { "width": 265, "height": 256 }, "lg": { "width": 500, "height": 500 } }
    },
    categoriesConfig :{
        destination: "public/categories",
        files: 2,
        name: "image"
    },
    foodConfig :{
        destination: "public/foods",
        files: 2,
        name: "image"
    },
    resturantConfig:{
        codeStart:1000,
        destination: "public/resturant",
        files: 2,
        name: "image"
    }
};