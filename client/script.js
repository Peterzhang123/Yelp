$(document).ready(initilized);

function initilized() {
  var e = new Event();
  // e.loadData();
  // e.getDataFromServer();
  // e.getCategoryDataFromServer();
  // e.getEventDataFromServer();
  // e.getCategoryDetailFromServer();

  var s = new Search();
  // s.SearchDataFromSever();
  
  var b = new BusinessName();
  b.getDataFromServer();
}