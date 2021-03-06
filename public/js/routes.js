const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/map', {
            templateUrl: 'views/map.html',
            controller: 'mapController',
            controllerAs: 'vm'
        })
        .when('/createMember', {
            templateUrl: 'views/register.html',
            controller: 'membreController',
            controllerAs: 'vm'
        })
        .when('/profilMember', {
            templateUrl: 'views/editProfilMembre.html',
            controller: 'membreEditController',
            controllerAs: 'vm'
        })
        .when('/member', {
            templateUrl: 'views/member.html',
            controller: 'membreController',
            controllerAs: 'vm'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: '',
            controllerAs: 'vm'
        })
        .when('/showProfile', {
            templateUrl: 'views/showProfile.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        });

};
