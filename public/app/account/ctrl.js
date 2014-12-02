alt
.controller('accountCtrl', function($scope, cartService, $location) {
  $scope.carts = cartService.query();
  $scope.isLove = function () {
    var currentRoute = $location.path().split('/');
    return currentRoute[2] === 'love-products' || currentRoute[2] === 'love-looks'|| currentRoute[2] === 'love-brand' ? 'true' : 'false';
  };
  $scope.quantity4 = 4;
  $scope.quantity1 = 1;
  $scope.people = [
    { id:1,
    img: '/assets/images/pro/p1.jpg',
    name:'Minne Hayes',
    role:'Photographer'},
    { id:2,
    img: '/assets/images/pro/p2.jpg',
    name:'Edwin Wallace',
    role:'Designer'},
    { id:3,
    img: '/assets/images/pro/p3.jpg',
    name:'Tony Herrera',
    role:'PR'},
    { id:4,
    img: '/assets/images/pro/p4.jpg',
    name:'Randall Rodriguez',
    role:'Photographer'},
    { id:5,
    img: '/assets/images/pro/p5.jpg',
    name:'Courtney Campbell',
    role:'PR'},
    { id:6,
    img: '/assets/images/pro/p6.jpg',
    name:'Lucy Brewer',
    role:'Blogger'},
    { id:7,
    img: '/assets/images/pro/p7.jpg',
    name:'Steve Watson',
    role:'Blogger'},
    { id:8,
    img: '/assets/images/pro/p8.jpg',
    name:'Toni Watts',
    role:'Photographer'},
    { id:9,
    img: '/assets/images/pro/p9.jpg',
    name:'Genesis Jordan',
    role:'Blogger'},
    { id:10,
    img: '/assets/images/pro/p10.jpg',
    name:'Peter Thompson',
    role:'Designer'}
  ];
  $scope.product = [
    { id:1,
    img: '/assets/images/pro/thumnail1.jpg',
    name:'Dark Muse Cape',
    brand:'byAMT'},
    { id:2,
    img: '/assets/images/pro/thumnail2.jpg',
    name:'Burning Pattern T-shirt',
    brand:'Meli Melo'},
    { id:3,
    img: '/assets/images/pro/thumnail3.jpg',
    name:'Acrylic Bubble Bracelet',
    brand:'Martyn Bal'},
    { id:4,
    img: '/assets/images/pro/thumnail4.jpg',
    name:'Lady Leather Handbag',
    brand:'byAMT'},
    { id:5,
    img: '/assets/images/pro/thumnail5.jpg',
    name:'Snake Skin Clutch',
    brand:'Martyn Bal'},
    { id:6,
    img: '/assets/images/pro/thumnail6.jpg',
    name:'Gear Machinery Necklace',
    brand:'Haizhen Wang'},
    { id:7,
    img: '/assets/images/pro/thumnail7.jpg',
    name:'Van Gogh Printed Dress',
    brand:'Haizhen Wang'},
    { id:8,
    img: '/assets/images/pro/thumnail8.jpg',
    name:'Leather Tassel Bag',
    brand:'byAMT'},
    { id:9,
    img: '/assets/images/pro/thumnail9.jpg',
    name:'Grey Wool Casual Blazer',
    brand:'Haizhen Wang'},
    { id:10,
    img: '/assets/images/pro/thumnail10.jpg',
    name:'Black R&R Backpack',
    brand:'Meli Melo'}
  ];
  $scope.random = function() {
    return 0.5 - Math.random();
  }
});