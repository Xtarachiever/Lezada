export const FormValidation = (formData)=>{
  const errorsArr = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^[+]{1}(?:[0-9\-\(\)\/\.]\s?){6,15}[0-9]{1}$/;

  if("email" in formData && !emailRegex.test(formData?.email)){
    errorsArr['email'] = 'You need a valid email address';
  }

  if("password" in formData && !formData.password || formData.password.length < 5){
    errorsArr['password'] = 'Make sure your password is longer than 7'
  }

  if("name" in formData){
    if(!formData.name){
      errorsArr['name'] = 'Name Field required'
    }else if(formData.name.length < 5){
      errorsArr.name = 'Name must be longer than 5'
    }
  }

  if("address" in formData && !formData.address){
    errorsArr['address'] = 'Address Field required'
  }

  if("phone_number" in formData && !phoneRegex.test(formData.phone_number)){
    errorsArr['phone_number'] = 'Phone Number needs to start with code e.g +234';
  }

  console.log(formData, errorsArr)
  return errorsArr
}
