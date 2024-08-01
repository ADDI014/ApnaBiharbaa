

const mongoose = require("mongoose");
const Temples = require("../models/TemplesSchema");
const Festivals = require("../models/FestivalSchema");
const clothings = require("../models/ClothingSchema");
const Cuisine = require("../models/CuisineSchema");
const culturalproducts = require("../models/CulturalProductSchema");
const BannerImg = require("../models/Banner");
const templeCategorySchema = require("../models/CategoriesModels/TempleCategories");



const templesDB = require("./TemplesData");
const festivalDB = require("./FestivalData");
const clothDB = require("./ClothingData");
const cuisineDB = require("./CuisinesData");
const culturalDB = require("./CulturalProductsData");
const BannerDB = require("./BannerData");
const categorieDB = require("./CategoriesData");




const MONGO_URL = "mongodb://127.0.0.1:27017/ApnaBihar";
main().then(()=>{
    console.log("Connected to DB");
})
.catch((err)=>{
    console.log(err);
})
async function main(){
    await mongoose.connect(MONGO_URL);
}



const initializeData = async () =>{
    await Temples.deleteMany({});
    await Festivals.deleteMany({});
    await culturalproducts.deleteMany({});
    await Cuisine.deleteMany({});
    await clothings.deleteMany({});
    await BannerImg.deleteMany({});
    await templeCategorySchema.deleteMany({});

    await Temples.insertMany(templesDB.templesData);
    await Festivals.insertMany(festivalDB.festivalData);
    await culturalproducts.insertMany(culturalDB.culturalProductsData);
    await Cuisine.insertMany(cuisineDB.cuisinesData);
    await clothings.insertMany(clothDB.clothingsData);
    await BannerImg.insertMany(BannerDB.bannerdt);
    await templeCategorySchema.insertMany(categorieDB.categoriesData);
} 


initializeData();