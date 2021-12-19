const request= require('request')
const ps= require('prompt-sync')
const prompt=ps();
const input=prompt('Enter the link : ')
request({
  url:input,
  json:true
},(err,response, body)=>{
  console.log(body)
})
