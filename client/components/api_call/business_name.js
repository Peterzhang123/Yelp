
class BusinessName{
  constructor(){

    this.SuccessGetDataFromServer = this.SuccessGetDataFromServer.bind(this);
    this.failGetDataFromSever = this.failGetDataFromSever.bind(this);

    this.name = "Good Grub Vending";
  }
  getDataFromServer(){
    $.ajax({
      url:`http://localhost:3000/api/business/${this.name}`,
      method:"GET",
    }).done(this.SuccessGetDataFromServer)
    .fail(this.failGetDataFromSever)
  }
  SuccessGetDataFromServer(res){
    console.log("business_location_search: ",res);
  }
  failGetDataFromSever(xhr,req,res){
    console.log(xhr,req,res)
  }

}