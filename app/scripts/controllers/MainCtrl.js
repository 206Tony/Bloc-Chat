(function () {
    function MainCtrl(Room, $uibModal) {

        this.rooms = Room.rooms;
        this.currentRoom = null;
        
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
        
        }
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();