alt
.controller('productCtrl', function($scope, $location) {   
  $scope.brandName = 'byAMT';
  $scope.productName = 'Bubble Bracelet - clear acrylic';
  $scope.price = 20;
  $scope.size = [
    { size: 'xs - ø 5.4cm' },
    { size: 's - ø 6.0cm' }, 
    { size: 'M - ø 6.4cm' }, 
    { size: 'L - ø 7cm' },        
    { size: 'XL - ø 8cm' },
    { size: 'XXL - ø 9.5cm' }
  ];
  $scope.qr = '/assets/images/QRcode.png';
  $scope.desc = 'description Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.';
  $scope.notes = 'notes Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.';
  $scope.advice = 'advice Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.';
  $scope.sizeHelp = 'size Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.';
  $scope.productThumb = [
    { thumb: '/assets/images/product-details/product1_small.jpg',
     medium:'/assets/images/product-details/product1.jpg',
     big:'/assets/images/product-details/product1_big.jpg'
    },
    { thumb: '/assets/images/product-details/product2_small.jpg',
     medium:'/assets/images/product-details/product2.jpg',
     big:'/assets/images/product-details/product2_big.jpg'
    },
    { thumb: '/assets/images/product-details/product3_small.jpg',
     medium:'/assets/images/product-details/product3.jpg',
     big:'/assets/images/product-details/product3_big.jpg'
    },
    { thumb: '/assets/images/product-details/product4_small.jpg',
     medium:'/assets/images/product-details/product4.jpg',
     big:'/assets/images/product-details/product4_big.jpg'
    },
    { thumb: '/assets/images/product-details/product5_small.jpg',
     medium:'/assets/images/product-details/product5.jpg',
     big:'/assets/images/product-details/product5_big.jpg'
    },
    { thumb: '/assets/images/product-details/product6_small.png',
     medium:'/assets/images/product-details/product6.jpg',
     big:'/assets/images/product-details/product5_big.jpg'
    }
  ];
  $scope.carousel1 = [
    { img: '/assets/images/product-thumbs/thumnail1.jpg' },
    { img: '/assets/images/product-thumbs/thumnail2.jpg' }, 
    { img: '/assets/images/product-thumbs/thumnail3.jpg' }, 
    { img: '/assets/images/product-thumbs/thumnail4.jpg' },        
    { img: '/assets/images/product-thumbs/thumnail5.jpg' },
    { img: '/assets/images/product-thumbs/thumnail6.jpg' }
  ];
  $scope.carousel2 = [
    { img: '/assets/images/product-thumbs/thumnail7.jpg' },
    { img: '/assets/images/product-thumbs/thumnail8.jpg' }, 
    { img: '/assets/images/product-thumbs/thumnail9.jpg' }, 
    { img: '/assets/images/product-thumbs/thumnail10.jpg' },        
    { img: '/assets/images/product-thumbs/thumnail11.jpg' },  
    { img: '/assets/images/product-thumbs/thumnail12.jpg' }
  ];
});