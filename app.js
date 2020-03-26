const myCamera = { name: 'Camera', use: 'heavy', hotkey: 0 };
const myText = { name: 'Text', use: 'medium', hotkey: 1 };
const myPhone = { name: 'Phone', use: 'light', hotkey:2 };
const myBrowser = { name: 'Browser', use: 'heavy', hotkey:3 };
const myWeather = { name: 'Weather', use: 'none', hotkey: 4 };

const myApps = [myCamera, myPhone, myText, myBrowser, myWeather];



for(let i = 0; i < myApps.length; i++) {
    const myApp = myApps[i];
    console.log('Using my ', i, myApp.use);
    

}


for(let i = 0; i < myApps.length; i++) {
    const myApp = myApps[i];
    console.log('Using my ', i , myApp.name);
    

}

function logOutThings () {
    console.log('here are your')

}
logOutThings()