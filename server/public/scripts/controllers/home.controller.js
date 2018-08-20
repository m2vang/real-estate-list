myApp.controller('HomeController', function ($http) {
    console.log('HomeController hit');

    const hc = this;
    hc.listing = [];

    hc.addHome = function () {
        console.log('in addHome');
        $http({
            method: 'POST',
            url: '/#!/home'
        }).then(function(response) {
            alert('Listing successfully added!');
            console.log('in POST-home', response.data);
            getHomes();
        }).catch(function(error) {
            alert('Unable to add listing!');
            console.log('error in POST-home', error);  
        });
    }; //end of addHome

    function getHomes() {
        $http({
            method: 'GET',
            url: '/#!/home'
        }).then(function (response) {
            console.log('in GET-home', response.data);
            hc.listings = response.data;
        }).catch(function (error) {
            console.log('error in GET-home', error.statusText);
        });
    }; //end of getHomes
    
}); //end of controller