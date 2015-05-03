app.controller('Controller', function ($scope, Service) {
    $scope.IsNewRecord = 1;
    loadRecords();
  // method for load data from database
    function loadRecords() {

        var promiseGet = Service.GetpeopleInfos();
        promiseGet.then(function(p1) {
            $scope.peopleInfos = p1.data;
            $scope.clear();
        },            
            function(errorP1) {
                $log.error('failure to load the peopleInfo', errorP1);

            });
    }
    
    //method for save
    $scope.save = function() {

        var addpeopleInfo = {
            name: $scope.name,
            background: $scope.background,
            email: $scope.email
        };

        var updatepeopleInfo = {            
            Id : $scope.Id,
            name: $scope.name,
            background: $scope.background,
            email: $scope.email
            
        };
        if ($scope.IsNewRecord == 1) {
            var promisePost = Service.post(addpeopleInfo);
            promisePost.then(function(p1) {
                $scope.Id = p1.data.Id;
                loadRecords();
                $scope.message = "Added Sucessfully";
                
            },
                function(err) {
                    $scope.message = "Added Error!";
                
            });
        } else {

            var promisePut = Service.put($scope.Id, updatepeopleInfo);
            promisePut.then(function(p1) {
                loadRecords();
                $scope.message = "Update Sucessfully";
            },

            function(err) {

                $scope.message = "Update Error";

            });
        }

    };
    

    // Method for Delete
    
    $scope.delete = function() {
        var promiseDelete = Service.delete($scope.Id);
        promiseDelete.then(function(p1) {
            $scope.message = "Delete Sucessfully";
            $scope.Id = 0;
            $scope.name = "";
            $scope.background = "";
            $scope.email = "";

            loadRecords();
        },function(err) {

            $scope.message = "Delete Error";
        });
    }
    
    $scope.get = function(people) {
        var promiseGetSingle = Service.get(people.Id);
        promiseGetSingle.then(function(p1) {
            var res = p1.data;
            $scope.Id = res.Id;
            $scope.name = res.name;
            $scope.background = res.background;
            $scope.email = res.email;

            $scope.IsNewRecord = 0;
        },            
            function (errorP1) {
                console.log('Failure to load the peopleInfo',errorP1);
                


            });
    }
    
    // clear All
    $scope.clear = function () {
        $scope.IsNewRecord = 1;
        $scope.name = "";
        $scope.background = "";
        $scope.email = "";

        $scope.Id = "";

    }
    
});





