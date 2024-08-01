
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended : true}));

const ejsMate = require("ejs-mate");
app.engine('ejs', ejsMate);

app.use(express.static(path.join(__dirname , 'public')));
app.use('/images', express.static(path.join(__dirname, 'public/images')));

const BiharTemples = require("./models/TemplesSchema");
const Clothing = require("./models/ClothingSchema");
const Cuisine = require("./models/CuisineSchema");
const CulturalProduct = require("./models/CulturalProductSchema");
const Festival = require("./models/FestivalSchema");
const Banner = require("./models/Banner");
const ReligiousCategories = require("./models/CategoriesModels/TempleCategories");
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

app.get("/apnabihar", async (req, res) => {
    try {
      const TemplesOfBihar = await BiharTemples.find({});
      const culturalProducts = await CulturalProduct.find({});
      const cuisines = await Cuisine.find({});
      const clothings = await Clothing.find({});
      const festivals = await Festival.find({});
      const Bannerimages = await Banner.find({});
      res.render("listing/index.ejs", {
        TemplesOfBihar,
        culturalProducts,
        cuisines,
        clothings,
        festivals,
        Bannerimages,
      });
    } catch (err) {
      res.status(500).send("Error fetching data");
      console.log(err);
    }
  });



  app.get("/apnabihar/spiritualPlaces", async (req, res) => {
    try {
      const TemplesOfBihar = await BiharTemples.find({});
      if (!TemplesOfBihar) {
        return res.status(404).send('bihartemples Place not found');
      }
      res.render("listing/Categories/TemplesCategories.ejs", {TemplesOfBihar });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });



  app.get("/apnabihar/culturalproducts", async (req, res) => {
    try {
      const CulturalProductBihar = await CulturalProduct.find({});
      if (!CulturalProductBihar) {
        return res.status(404).send('bihartemples Place not found');
      }
      res.render("listing/AllList/AllBiharProducts.ejs", { CulturalProductBihar });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });

  app.get("/apnabihar/cuisines", async (req, res) => {
    try {
      const CuisineOfBihar = await Cuisine.find({});
      if (!CuisineOfBihar) {
        return res.status(404).send('cuisines not found');
      }
      res.render("listing/AllList/AllBiharCuisines.ejs", { CuisineOfBihar });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });


  app.get("/apnabihar/spiritualPlaces/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const TemplesOfBihar = await BiharTemples.findById(id);
      if (!TemplesOfBihar) {
        return res.status(404).send('bihartemples Place not found');
      }
      res.render("listing/templeOfBihar.ejs", {TemplesOfBihar });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });

  app.get("/apnabihar/culturalproducts/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const culturalProduct = await CulturalProduct.findById(id);
      if (!culturalProduct) {
        return res.status(404).send('Cultural Product not found');
      }
      res.render("listing/culturalproducts.ejs", { culturalProduct });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });
  
  app.get("/apnabihar/cuisines/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const cuisine = await Cuisine.findById(id);
      if (!cuisine) {
        return res.status(404).send('Cuisine not found');
      }
      res.render("listing/cuisines.ejs", { cuisine });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });
  
  app.get("/apnabihar/clothings/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const clothing = await Clothing.findById(id);
      if (!clothing) {
        return res.status(404).send('Clothing not found');
      }
      res.render("listing/Clothing.ejs", {clothing });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });
  
  app.get("/apnabihar/festivals/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const festival = await Festival.findById(id);
      if (!festival) {
        return res.status(404).send('Festival not found');
      }
      res.render("listing/festivals.ejs", {festival });
    } catch (err) {
      res.status(400).send('Invalid ID');
    }
  });


//new route

app.get("/apnabihar/new",(req,res)=>{
  res.render("listing/newTouristPlaces.ejs")
})


app.get("/",(req,res)=>{
    res.send("Home");
})


app.listen(8080, ()=>{
    console.log("server is listening on port 8080");
})

