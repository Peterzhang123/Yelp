

class Event{
  constructor(elementConfig){

    this.SuccessGetEventDataFromServer = this.SuccessGetEventDataFromServer.bind(this);
    this.failGetEventDataFromSever = this.failGetEventDataFromSever.bind(this);

    this.SuccessGetCategoryDetailFromServer = this.SuccessGetCategoryDetailFromServer.bind(this);
    this.failGetCategoryDetailFromSever = this.failGetCategoryDetailFromSever.bind(this);

    this.SuccessGetCategoryDataFromServer = this.SuccessGetCategoryDataFromServer.bind(this);
    this.failGetCategoryDataFromSever = this.failGetCategoryDataFromSever.bind(this);

    this.addData = this.addData.bind(this);
    this.eventList = [];
    this.city = "LA";
  }
  addData(event){
    this.eventList.push(new EventList(event,{
      click:this.handleRowclick,
    }))
  }
  loadData(){
    console.log("load is working");
  }
  render(eventList){
    var rednerEvent = eventList.map(v => v.renderList());
  }
  displayAllData(){
    this.render(this.eventslist)
  }


  getCategoryDataFromServer(){
    $.ajax({
      url:`http://localhost:3000/api/category`,
      method:"GET",
    }).done(this.SuccessGetCategoryDataFromServer)
    .fail(this.failGetCategoryDataFromSever)
  }
  SuccessGetCategoryDataFromServer(res){
    console.log("Category: ",res);
  }
  failGetCategoryDataFromSever(xhr,req,res){
    console.log(xhr,req,res)
  }

  getCategoryDetailFromServer(){
    var category = "homeservices";
    $.ajax({
      url:`http://localhost:3000/api/category/${category}`,
      method:"GET",
    }).done(this.SuccessGetCategoryDetailFromServer)
    .fail(this.failGetCategoryDetailFromSever)
  }
  SuccessGetCategoryDetailFromServer(res){
    console.log("Category_Detail: ",res);
  }
  failGetCategoryDetailFromSever(xhr,req,res){
    console.log(xhr,req,res)
  }

  getEventDataFromServer(){
    $.ajax({
      url:`http://localhost:3000/api/events`,
      method:"GET",
    }).done(this.SuccessGetEventDataFromServer)
    .fail(this.failGetEventDataFromSever)
  }
  SuccessGetEventDataFromServer(res){
    console.log("EventData: ",res);
  }
  failGetEventDataFromSever(xhr,req,res){
    console.log(xhr,req,res)
  }
}