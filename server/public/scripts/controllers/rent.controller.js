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
            alert('Unable to get rentals!')
            console.log('error in GET-rc', error);
        });
    }; //end of getRentListings

    rc.removeRent = function (rentId) {
        console.log('in removeRent', rentId);
        $http({
            method: 'DELETE',
            url: '/delete/' + rentId
        }).then(function (response) {
            alert('Listing successfully deleted!')
            console.log('rent deleted', response);
            getRentListings();
        }).catch(function (error) {
            alert('Unable to delete!')
            console.log('error in removeRent', error);
        });
    }; //end of removeRent

}); //end of controller