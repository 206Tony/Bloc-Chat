(function() {
    function ModalCtrl(Room, $uibModalInstance, $cookies) {
        this.cancel = function () {
            $uibModalInstance.dismiss();   
        };
        
        this.createRoom = function() {
            Room.addRoom(this.newRoom.name);
            $uibModalInstance.close();
        };
        
        this.createUserName = function () {
            debugger;
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
        }
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', '$cookies', ModalCtrl]);
})();