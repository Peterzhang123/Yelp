
const axois = require("axios");
const API = require("../../../config/api");

module.exports = async (req, res) => {

  try {
    const event_data = await axois.get(`${API.yelp}/events/featured`, {
      headers: {
        Authorization: API.api,
      },
    })
      .then(response => {
        return response.data;
      })
      .catch(error => console.log(error));
      // console.log(event_data);
    res.send({
      message:"featured result",
      data: event_data,
    })

  } catch (error) {
    console.log("featured Error: ", error)
  }

}