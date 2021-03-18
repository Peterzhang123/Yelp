

class EventList{
  constructor(data,callbacks){
    this.data = data;
    this.callbacks = callbacks;
  }
  handleRowCallbacks(e){
    if(e) e.preventDefault();
    this.callbacks.click(this);
  }
  renderList(){

  }
}
