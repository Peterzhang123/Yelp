
class Search{
  constructor(){
    this.successSearchDataFromSever = this.successSearchDataFromSever.bind(this);
    this.failSearchDataFromSever = this.failSearchDataFromSever.bind(this);

    this.category = null;
    this.location = null;

  }
  SearchDataFromSever(){
    $.ajax({
      url:`http://localhost:3000/api/search/${this.category}/${this.location}/`,
      method:"GET",
    }).done(this.successSearchDataFromSever)
    .fail(this.failSearchDataFromSever);
  }
  successSearchDataFromSever(res){
    console.log("search-Data: ",res);
    return res;
  }
  failSearchDataFromSever(xhr){
    console.log("search result is not exist: ",xhr);
  }
}