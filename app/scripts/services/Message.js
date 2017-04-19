(function () {
    function Message($firebaseArray) {
        var Message = {};
        
        var ref = firebase.database().ref().child("messages");
        Message.messages = $firebaseArray(ref);
        
         Message.getByRoomId = function (roomId) {
            return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
        }
        
        Message.send = function(newMessage){
            debugger;
            // newMessage = { roomId: 'ghasdfasdf', sentAt: '201645342' };
            Message.messages.$add({ $value: newMessage }).then(function(ref) {
        })}
              
        return Message;
            
    }
    
    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();