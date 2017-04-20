(function () {
    function MainCtrl(Room, Message, $uibModal, $cookies) {

        this.rooms = Room.rooms;
        this.currentRoom = null;
        this.setUsername = $cookies.get('blocChatCurrentUser');
        this.content = '';
        
        this.addRoom = function () {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        };
          
        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        };
        
        this.sendMessage = function () {
            debugger;
            if (this.content) {
                Message.send(this.content, this.currentRoom.$id);
                this.content = '';
            }
        };
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message', '$uibModal', '$cookies', MainCtrl]);
})();