var getUserRepos = function (){
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=b3353fc64354c9fbf62bd339178f2411").then(function(response) {
        response.json().then(function(data){
            console.log(data);
});

}); 

}

getUserRepos();