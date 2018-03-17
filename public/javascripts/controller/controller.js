/*app.controller('myController', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/Tasks/');
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data) {
        console.log('Error: ' + data);
    });
});
*/


var conCtrl = function($scope, $http) {

        $scope.data = [];
        var request = $http.get('/Tasks/');
        request.success(function(data) {
            $scope.data = data;
        });
        request.error(function(data) {
            console.log('Error: ' + data);
        });


        $scope.showConsommation = function(consommationID) {
            ModalService.showModal({
                templateUrl: "../App/consomation/ModalConsommationCamion",
                controller: "conCtrl",
                windowClass: 'app-modal-window',
                inputs: {
                    title: (consommationID == null) ? "Ajouter consommation" : " Edit consommation: " + consommationID,
                    consommationID: consommationID
                }
            }).then(function(modal) {
                modal.element.modal(); // open the modal form
                modal.close.then(
                    function(result) {
                        $scope.complexResult = modal.scope.CRUDresult;
                        if ($scope.complexResult.success) {
                            notifications.showSuccess($scope.complexResult.data);
                            rhService.getCamionList($scope.vehicule, $scope.chauffeur, $scope.destination, $scope.annee, $scope.mois, $scope.jour).then(
                                function(results) {
                                    $scope.camions = results.data;
                                    $scope.CRUDresult = "Data updated with success"
                                });

                        }
                    });
            });

        };
        $scope.valuePerPage = ['10', '20', '50', '100']
        $scope.sort = function(keyname) {
            $scope.sortKey = keyname; //set the sortKey to the param passed
            $scope.reverse = !$scope.reverse; //if true make it false and vice versa
        }
        $scope.numberPage = '10';
    }
    //conCamionCtrl.$inject = ['$scope', '$element', 'ModalService', 'rhService', 'filterFilter', 'notifications'];


var contactCtrl = function($scope, $http, ModalService) {

    $scope.contacts = [];
    var request = $http.get('/contacts/');
    request.success(function(data) {
        $scope.contacts = data;
    });
    request.error(function(data) {
        console.log('Error: ' + data);
    });


    $scope.showContact = function(id) {
        ModalService.showModal({
            templateUrl: "modal/ModalContact.html",
            controller: "contactpopCtrl",
            windowClass: 'app-modal-window',
            inputs: {
                title: (id == null) ? "Ajouter Contact" : " Modifier Contact: " + id,
                id: id
            }
        }).then(function(modal) {
            modal.element.modal(); // open the modal form
            modal.close.then(
                function(result) {
                    $scope.complexResult = modal.scope.CRUDresult;
                    if ($scope.complexResult.nom) {
                        var request = $http.get('/contacts/');
                        request.success(function(data) {
                            $scope.contacts = data;
                        });
                        request.error(function(data) {
                            console.log('Error: ' + data);
                        });
                        //    notifications.showSuccess($scope.complexResult.data);


                    }

                    if ($scope.complexResult.affectedRows > 0) {
                        var request = $http.get('/contacts/');
                        request.success(function(data) {
                            $scope.contacts = data;
                        });
                        request.error(function(data) {
                            console.log('Error: ' + data);
                        });
                        //    notifications.showSuccess($scope.complexResult.data);


                    }
                });
        });

    };
    $scope.valuePerPage = ['10', '20', '50', '100']
    $scope.sort = function(keyname) {
        $scope.sortKey = keyname; //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
    $scope.numberPage = '10';

    $scope.delete = function(id) {
        //  alert(id);

        var request = $http.delete('/contacts/' + id);
        request.success(function(data) {
            // $scope.contacts = data;
            var request = $http.get('/contacts/');
            request.success(function(data) {
                $scope.contacts = data;
            });
            request.error(function(data) {
                console.log('Error: ' + data);
            });
        });
        request.error(function(data) {
            console.log('Error: ' + data);
        });
    }
}



var contactpopCtrl = function($scope, $http, close, title, close, id) {
    $scope.vehicule = null;
    $scope.id = id;
    $scope.title = title;
    $scope.contact = {};
    $scope.contacts = [];

    if ($scope.id) {

        var request = $http.get('/contacts/' + $scope.id);

        request.success(function(data) {
            $scope.contact = data[0];
        });
        request.error(function(data) {
            console.log('Error: ' + data);
        });
    }



    $scope.close = function() {
        //   $http.post("/Services/CreateSection", JSON.stringify(newSection));
        if ($scope.id > 0) {
            var request = $http.put('/contacts/' + $scope.id, $scope.contact);
            request.success(function(data) {
                //   alert(JSON.stringify(data))
                $scope.CRUDresult = data;
            });
            request.error(function(data) {
                //   alert(data)
                console.log('Error: ' + data);
            });
        } else {
            var request = $http.post('/contacts', $scope.contact);
            request.success(function(data) {
                //   alert(JSON.stringify(data))
                $scope.CRUDresult = data;
            });
            request.error(function(data) {
                //   alert(data)
                console.log('Error: ' + data);
            });
        }
        close({
                dataState: $scope.CRUDresult
            },
            800);
        // close, but give 500ms for bootstrap to animate
        //   return (window.location.reload());
    };



}