(function() {
    function ModalCtrl($uibModalInstance, Room) {
        this.cancel = function () {
            $uibModalInstance.dismiss();  
        };
        
        this.createRoom = function () {
            Room.addRoom(this.newRoom.name);
            $uibModalInstance.close();
        };
               
    }
    
    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();