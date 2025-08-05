const Product = require("../models/product");

// ✅ Async function to get all products
const getAllProducts = async (req, res) => {
  try {
    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};
    if(company) {
      queryObject.company = company;
      console.log(queryObject);
    }
    if(name) {
      queryObject.name = {$regex:name,$options:"i"}; // Case-insensitive search
      console.log(queryObject);
    }
    if(featured) {
      queryObject.featured = featured === 'true'; // Convert string to boolean
      console.log(queryObject);
    }

    let apiData=Product.find(queryObject);

    if(sort) {
     let sortFix =sort.split(",").join(" ");
     apiData=  apiData.sort(sortFix); // Use the sort query parameter
    } 
      console.log(queryObject);
    if(select) {
      //let selectFix =select.replace(","," ");
       let selectFix=select.split(",").join(" "); // Ensure select is formatted correctly
      apiData=  apiData.select(selectFix); // Use the select query parameter
    }
    let page= Number(req.query.page) || 1;
    let limit= Number(req.query.limit) || 10;

    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit); // Implement pagination


    //page=2;
    //limit=3;
    //let skip=(page-1)*limit;1*3=3;


      const Products = await apiData; // Example filter, can be modified
    res.status(200).json({Products,nHits:Products.length });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
 // ✅ Testing function should also be async if it uses await
const getAllProductsTesting = async (req, res) => {
  try {
    const {company,name,featured,sort,select} = req.query;
    const queryObject = {};
   if(company) {
      queryObject.company = company;
      console.log(queryObject);
    }
    if(name) {
      queryObject.name = {$regex:name,$options:"i"}; // Case-insensitive search
      console.log(queryObject);
    }
    if(featured) {
      queryObject.featured = featured === 'true'; // Convert string to boolean
      console.log(queryObject);
    }
    let apiData=Product.find(queryObject);
    if(sort) {
     let sortFix =sort.split(",").join(" ");
     apiData=  apiData.sort(sortFix); // Use the sort query parameter
    } 
      console.log(queryObject);
if(select) {
      //let selectFix =select.replace(","," ");
       let selectFix=select.split(",").join(" "); // Ensure select is formatted correctly
      apiData=  apiData.select(selectFix); // Use the select query parameter
    } 
     let page= Number(req.query.page) || 1;
    let limit= Number(req.query.limit) || 10;

    let skip=(page-1)*limit;
    apiData=apiData.skip(skip).limit(limit); // Implement pagination

//const myData = await Product.find(queryObject).sort("name company");
  const products = await apiData;  //i do select in place of sort
  res.status(200).json({ Products,nHits:Products.length});
  } catch (error) {
    res.status(500).json({ error: "Something went wrong in testing" });
  }
  
};
// ✅ Export both functions
module.exports = {getAllProducts, getAllProductsTesting};
