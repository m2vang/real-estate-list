myApp.controller('HomeController', function ($http) {
    console.log('HomeController hit');

    const hc = this;
    // hc.listing = [];

    hc.addHome = function () {
        console.log('in addHome');
        $http({
            method: 'POST',
            url: '/addHome',
            data: {
                cost: hc.cost,
                sqft: hc.sqft,
                type: hc.type,
                city: hc.city, 
                image_path: hc.image_path
            }
        }).then(function (response) {
            console.log('POST', response.data);
        }).catch(function (error) {
            alert('Unable to add listing!');
            console.log('Error in addHome', error);
        })
    }; //end of addHome

    // function getHomes() {
    //     $http({
    //         method: 'GET',
    //         url: '/#!/home'
    //     }).then(function (response) {
    //         console.log('in GET-home', response.data);
    //         hc.listings = response.data;
    //     }).catch(function (error) {
    //         console.log('error in GET-home', error.statusText);
    //     });
    // }; //end of getHomes
    
}); //end of controller