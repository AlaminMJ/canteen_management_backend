class CustomeError extend Error{
  constactor(status,message){
    super();
    this.status= status;
    this.message= message
  }
  static notFound (status=404,message){
    return new CustomeError();
  }
  static alreadyExsit (){
    return new CustomeError
  }

}
export default CustomeError;