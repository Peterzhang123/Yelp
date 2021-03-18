
const API = require("../../../config/api");
const axios = require("axios");


module.exports = async (req, res) => {

  const { name } = req.params;

  console.log("name: ",name);

  try {
    let match_name = await axios.get(`${API.yelp}/businesses/matches`, {
      headers: {
        Authorization: API.api,
      },
    })
      .then(response => {
        console.log(response);
        return response.data;
      })
      .catch((error) => { 
        res.send({
        message:`Business Name Search is not sucess: ${error}`
      })});

    res.send({
      message: "yelp api test",
      data:match_name
    })

  } catch (error) {
    res.send({
      message:`Business Name Search is not sucess: ${error}`
    })
  }

}

