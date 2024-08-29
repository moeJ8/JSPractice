function sendWelcomeEmail(email){
    console.log(`welcome ${email}`);
}
const users = [
    {name:'Alice', email: 'alice@ex.com'},
    {name:'Bob', email: 'bob@ex.com'},
    {name:'Moe', email: 'moe@ex.com'}
];

users.forEach((user)=>{
    sendWelcomeEmail(user.email);
})