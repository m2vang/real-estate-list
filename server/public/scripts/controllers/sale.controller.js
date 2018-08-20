myApp.controller('SaleController', function ($http) {
    console.log('SaleController hit');
    const sc = this;
    //sc.saleHomes = [];

    getSaleListings();

    function getSaleListings() {
        console.log('in getSaleListings');   
        $http({
            method: 'GET',
            url: '/sale'
        }).then(function(response) {
            console.log('in GET-sc', response.data);
            sc.sale = response.data;
        }).catch(function(error) {
            console.log('error in GET-sc', error);     
        });
    }; //end of getSaleListings
    
}); //end of controller