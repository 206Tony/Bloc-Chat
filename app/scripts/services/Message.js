(function () {
    function Message($firebaseArray, $cookies, Room) {
        var Message = {};
        
        var ref = firebase.database().ref().child("messages");
        Message.messages = $firebaseArray(ref);
        
        Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        };
        
        Message.send = function(newMessage, roomId) {
            var messageDate = new Date();
            debugger;
            Message.messages.$add({
                username: $cookies.get('blocChatCurrentUser'),
                content: newMessage,
                roomId: roomId,
                sentAt: messageDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
            });
        };
              
        return Message;
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', 'Room',  Message]);
})();