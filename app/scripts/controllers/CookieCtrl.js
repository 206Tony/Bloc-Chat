(function() {
    function CookieCtrl($uibModalInstance, $cookies) {
        this.setUsername = function() {
            debugger;
            $cookies.put('blocChatCurrentUser', this.username);
            $uibModalInstance.close();
            
        }
    };
    
    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$uibModalInstance', '$cookies', CookieCtrl]);
})();