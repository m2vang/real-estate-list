myApp.controller('SaleController', function ($http) {
    console.log('SaleController hit');
    const sc = this;
    sc.sale = [];

    getSaleListings();

    function getSaleListings() {
        console.log('in getSaleListings');
        $http({
            method: 'GET',
            url: '/sale'
        }).then(function (response) {
            console.log('in GET-sc', response.data);
            sc.sale = response.data;
        }).catch(function (error) {
            console.log('error in GET-sc', error);
        });
    }; //end of getSaleListings 

    sc.removeSale = function (saleId) {
        console.log('in removeRent', saleId);
        let cT = confirm('Confirming deletion?');
        if (cT == true) {
            $http({
                method: 'DELETE',
                url: '/delete/' + saleId
            }).then(function (response) {
                alert('Listing successfully deleted!')
                console.log('sale deleted', response);
                getSaleListings();
            }).catch(function (error) {
                alert('Unable to delete!')
                console.log('error in removeSale', error);
            });
        } else {
            alert ('Deletion cancelled.')
        }; //end of if-else
    }; //end of removeSale
}); //end of controller