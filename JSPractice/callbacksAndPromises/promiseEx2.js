const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            messege: ':('
        })
    } else if (userWatchingCatMeme){
        errorCallback({
            name: 'User Watching Cat Meme!',
            messege: 'Enjoy!! :)'
        })
    }
    else{
        callback('Meow')
    }
    
}

watchTutorialCallback((messege)=>{
    console.log('Success: ' + messege)
}, (error)=> {
    console.log(error.name + ' ' + error.messege)
})