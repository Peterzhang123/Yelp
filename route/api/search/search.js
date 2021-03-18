

const axios = require("axios");
const API = require("../../../config/api");

module.exports = async (req, res) => {

  const { location,category } = req.params;

  console.log("location: ", req.params);

  try {
    const search_result = await axios.get(`${API.yelp}/businesses/search?term=${category}&location=${location}`, {
        headers: {
          Authorization: API.api,
        },
      }).then(response => {
        return response.data;
      })
      .catch(error => {
        res.send({
          message: `something is wrong in search , ${error}`,
        })
      });

    res.send({
      message: "search Result",
      data: search_result,
    })

  } catch (error) {
    res.send({
      message: `something is wrong in search , ${error}`,
    })
  }
}