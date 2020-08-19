var whoIsHere = 'teacher'

if(whoIsHere === 'user'){
console.log('Greeting message from user')
console.log('Allow access to view all courses')

}else if (whoIsHere === 'teacher'){
    console.log('Greeting message from TEACHER')
    console.log('Allow access their courses')

}else{
    console.log('Message: please verify your email')
    console.log('send user an email')
}