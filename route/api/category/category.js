
const axois = require("axios");
const API = require("../../../config/api");

module.exports = async (req, res) => {

  try {
    let category_data = await axois.get(`${API.yelp}/categories`, {
      headers: {
        Authorization: API.api,
      },
    })
      .then(response => {
        return response.data.categories;
      })
      .catch(error => console.log(error));

      category_data = category_data.filter(v => {
        return v.parent_aliases == "restaurants"});
      
    res.send({
      message:"category result",
      data: category_data,
    })

  } catch (error) {
    console.log("category Error: ", error)
  }

}