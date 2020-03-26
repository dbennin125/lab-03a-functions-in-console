//step 1
const myCamera = { name: 'Camera', use: 'heavy', hotkey: 0 };
const myText = { name: 'Text', use: 'medium', hotkey: 1 };
const myPhone = { name: 'Phone', use: 'light', hotkey:2 };
const myBrowser = { name: 'Browser', use: 'heavy', hotkey:3 };
const myWeather = { name: 'Weather', use: 'none', hotkey: 4 };
const myGPS ={ name: 'GPS', use: 'heavy', hotkey:5 };

//step 2
const myApps = [myCamera, myPhone, myText, myBrowser, myWeather, myGPS];


//step 3

for(let i = 0; i < myApps.length; i++) {
    const myApp = myApps[i];
    console.log('Using my ', i, myApp.use);
    

}


function logOutThings () {
    console.log('here are your' + myApps.length + 'things')

}
  logOutThings();

//step 4

// function newFunk ()