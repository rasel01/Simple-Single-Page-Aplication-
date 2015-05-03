app.service('Service', function($http) {

    // insert a new data 
    this.post = function(peopleInfo) {
        var request = $http({
            method: "post",
            url: "/api/PeopleApi",
            data: peopleInfo
        });
        return request;
    }

    // pick a data

    this.get = function(Id) {
        return $http.get("/api/PeopleApi/" + Id);
    }

    // list of data

    this.GetpeopleInfos = function() {
        return $http.get("/api/PeopleApi/");
    }
    

    //Update a  data

    this.put = function (Id, people) {
        var request = $http({
            
            method: "put",
            url: "/api/PeopleApi/" + Id,
            data : people
        });
        return request;
    }
    
    // Delete : delete a data
    this.delete = function(Id) {
        var request = $http({
            method: "delete",
            url :  "/api/PeopleApi/ " + Id
        });
        return request;
    }
    
});