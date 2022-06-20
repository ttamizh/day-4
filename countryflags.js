var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/all');
request.send()
request.onload = function(){
    var country = JSON.parse(this.response);
    console.log(country);
    for(let cf of country){
        console.log(cf.flags);
    }
}
