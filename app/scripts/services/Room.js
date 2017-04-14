(function () {
    function Room($firebaseArray) {
        var Room = {};
        
        var ref = firebase.database().ref().child("rooms");
        Room.rooms = $firebaseArray(ref);
                  
        Room.addRoom = function(newRoom) {
            Room.rooms.$add({ $value: newRoom }).then(function(ref) {
        })} 
        return Room;    
    }
    
    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', '$uibModal', Room]);
})();