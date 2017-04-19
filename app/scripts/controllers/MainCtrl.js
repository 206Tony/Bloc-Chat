(function () {
    function MainCtrl(Room, Message, $uibModal, $cookies) {

        this.rooms = Room.rooms;
        this.currentRoom = null;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        
        this.addRoom = function() {
            $uibModal.open({
                templateUrl: '/templates/modal.html',
                size: 'sm',
                controller: 'ModalCtrl as modal'
            });
        }
          
        this.setCurrentRoom = function (room) {
            this.currentRoom = room;
            this.messages = Message.getByRoomId(this.currentRoom.$id);
        }
        
        this.sendMessage = function() {
            this.newMessage.roomId = this.currentRoom.$id;
            Message.send(this.newMessage);
        }
    }
    
    angular
        .module('blocChat')
        .controller('MainCtrl', ['Room', 'Message','$uibModal', '$cookies', MainCtrl]);
})();