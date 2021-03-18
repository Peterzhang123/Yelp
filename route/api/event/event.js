
const axois = require("axios");
const API = require("../../../config/api");

module.exports = async (req, res) => {

  try {
    const event_data = await axois.get(`${API.yelp}/events`, {
      headers: {
        Authorization: API.api,
      },
    })
      .then(response => {
        return response.data.events;
      })
      .catch(error => console.log(error));

      res.send({
      message:"events result",
      data: event_data,
    })

  } catch (error) {
    console.log("events Error: ", error)
  }

}