
const axois = require("axios");
const API = require("../../../../config/api");

module.exports = async (req, res) => {

  const { alias } = req.params;

  console.log("req.params: ",req.params);

  try {
    let category_detail = await axois.get(`${API.yelp}/categories/${alias}`, {
      headers: {
        Authorization: API.api,
      },
    })
      .then(response => {
        return response.data.categories;
      })
      .catch(error => console.log(error));

    res.send({
      message: "category_detail result",
      data: category_detail,
    })

  } catch (error) {
    console.log("category Error: ", error)
  }

}