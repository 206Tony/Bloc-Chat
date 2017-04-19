(function() {
    fuction BlocChatCookies($cookies) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/login.html',
                size: 'sm',
                controller: 'ModalCtrl as modal',
                keyboard: false,
                backdrop: 'strict'
            });
        }
    }
    
    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();