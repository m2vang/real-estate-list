myApp.controller('RentController', function ($http) {
    console.log('RentController hit');
    const rc = this;
    rc.rent = [];

    getRentListings();

    function getRentListings() {
        console.log('in getRentListings');
        $http({
            method: 'GET',
            url: '/rent'
        }).then(function (response) {
            console.log('in GET-rc', response.data);
            rc.rent = response.data;
        }).catch(function (error) {
            console.log('error in GET-rc', error);
        });
    }; //end of getRentListings
}); //end of controller