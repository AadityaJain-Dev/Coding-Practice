let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest =  true


if (!isVerified && isLoggedIn && hasPaymentToken){
    console.log('Greeting message');
    console.log('Grant access to paid course');
}else if(isVerified || isGuest){
    console.log('Allow free previews');
}else{
    console.log('MESSAGE: please contact admin');
}
