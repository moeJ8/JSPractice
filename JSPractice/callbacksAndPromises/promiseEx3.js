const userLeft = false;
const userWatchingCatMeme = true;


function watchTutorialPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User Left',
                messege: ':('
            })
        } else if (userWatchingCatMeme){
            reject({
                name: 'User Watching Cat Meme!',
                messege: 'Enjoy!! :)'
            })
        }
        else{
            resolve('Meow')
        }
    })
   
    
}

watchTutorialPromise().then((messege)=>{
    console.log('Success: ' + messege)
}).catch( (error)=> {
    console.log(error.name + ' ' + error.messege)
})