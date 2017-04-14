(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        this.cancel = function () {
            $uibModalInstance.dismiss();   
        }
        
        this.createRoom = function() {
            debugger;
            Room.addRoom(this.newRoom.name);
            $uibModalInstance.close();
        }
    }
    
    angular 
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();