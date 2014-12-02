var alt = angular.module('alt', ['ngResource', 'ngRoute', 'toaster', 'restangular', 'wu.masonry']);

alt
.config(function($routeProvider, $locationProvider, RestangularProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
  RestangularProvider.setBaseUrl('/data');
  $routeProvider

  .when('/', { templateUrl: '/pages/index' })
  /* ==========================================================================
  explore page
  ========================================================================== */
  .when('/explore', { templateUrl: '/pages/explore/explore' })
    /* ==========================================================================
  showroom page
  ========================================================================== */
  .when('/showroom', { templateUrl: '/pages/showroom/showroom' })
  /* ==========================================================================
  Search page
  ========================================================================== */
  .when('/search', { templateUrl: '/pages/search/search' })
  .when('/search/:section', { templateUrl: '/pages/search/search-section' })
  /* ==========================================================================
  Signup page
  ========================================================================== */
  .when('/signup', { templateUrl: '/pages/signup/signup' })
  /* ==========================================================================
  Product page
  ========================================================================== */
  .when('/product', { templateUrl: '/pages/product-detail/product' })
  /* ==========================================================================
  Info page
  ========================================================================== */
  .when('/info', { templateUrl: '/pages/info/about' })
  .when('/join-us', { templateUrl: '/pages/info/join-us' })
  .when('/customer-care', { templateUrl: '/pages/info/customer-care' })
  /* ==========================================================================
  Pro Account page
  ========================================================================== */
  .when('/account/recentnews', { templateUrl: '/pages/account/vip-recentNews-content' })
  .when('/account/otherprofile', { templateUrl: '/pages/account/vip-otherMemberProfile-content' })
  .when('/account/otherprofile-connected', { templateUrl: '/pages/account/vip-otherMemberProfile-connected' })
  .when('/account/new-member', { templateUrl: '/pages/account/vip-newmember' })
  .when('/account/myconnections', { templateUrl: '/pages/account/vip-myConnections-content' })
  .when('/account/otherconnections', { templateUrl: '/pages/account/vip-otherconnections' })
  .when('/account/inbox', { templateUrl: '/pages/account/vip-accountInbox-content' })
  .when('/account/compose', { templateUrl: '/pages/account/vip-accountCompose-content' })
  .when('/account/maildetail', { templateUrl: '/pages/account/vip-accountMailDetails-content' })
  .when('/account/invite', { templateUrl: '/pages/account/vip-accountInvitation-content' })
  /* ==========================================================================
  Account page
  ========================================================================== */
  .when('/account/love-looks', { templateUrl: '/pages/account/love-looks' })
  .when('/account/love-products', { templateUrl: '/pages/account/love-products' })
  .when('/account/love-brand', { templateUrl: '/pages/account/love-brand' })
  .when('/account/order', { templateUrl: '/pages/account/order' })
  .when('/account/profile', { templateUrl: '/pages/account/profile' })
  .when('/account/cart', { templateUrl: '/pages/account/cart' })
  /* ==========================================================================
  Brand page
  ========================================================================== */
  .when('/brand', { templateUrl: '/pages/brand/brand-products-all' })
  .when('/brand/products', { templateUrl: '/pages/brand/brand-products-all' })
  .when('/brand/products/all', { templateUrl: '/pages/brand/brand-products-all' })
  .when('/brand/products/featured', { templateUrl: '/pages/brand/brand-products-featured' })
  .when('/brand/trace', { templateUrl: '/pages/brand/brand-trace' })
  .when('/brand/inspirations', { templateUrl: '/pages/brand/brand-Inspirations' })
  .when('/brand/:chapter', { templateUrl: '/pages/brand/brand-chapter' });
});