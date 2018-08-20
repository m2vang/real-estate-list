myApp.controller('HomeController', function ($http) {
    console.log('HomeController hit');

    const hc = this;

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
            alert('Listing successfully added!')
            console.log('POST', response.data);
        }).catch(function (error) {
            alert('Unable to add listing!');
            console.log('Error in addHome', error);
        });

        hc.cost = '';
        hc.sqft = '';
        hc.type = '';
        hc.city = '';
        hc.image_path = '';
    }; //end of addHome
}); //end of controller