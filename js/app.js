(function() {
  //Main module
  var app = angular.module('appMain', []);
  /*Controller for nav*/
  app.controller('SideNavController', function(){
    this.elements = listSideNav;
  });
  /*Controller for Content*/
  app.controller('contentController', function(){
    this.contents = contentHeder;
  });
  /*Controller for events*/
  app.controller('EventController', function(){
    this.events = eventList;
  });
  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
    };
  });
  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });
  /*Varibales for nav*/
  var listSideNav = [
    {
      name: 'Profile',
      description: "description",
      link: "",
      date: "12/08/2016",
      class: "glyphicon glyphicon-user ten-right active",
      color: '#CCC',
      faces: 14
    }, {
      name: 'My Events',
      description: "description",
      link: "",
      date: "15/08/2016",
	  class: "glyphicon glyphicon-calendar ten-right"
     },{
      name: 'Criteria',
      description: "description",
      link: "",
      date: "15/08/2016",
	  class: "glyphicon glyphicon-tags ten-right"
     },{
      name: 'Support',
      description: "description",
      link: "",
      date: "15/08/2016",
	  class: "glyphicon glyphicon-question-sign ten-right"
     }  
  ];
  /*Variables for Content*/
  
  var contentHeder = [
    {
	  class: "glyphicon glyphicon-envelope ten-right margin-ten-top margin-ten-bottom font-size-16",	
      name: 'Messages',
	  font:"margin-ten-bottom font-size-16",
      description: "description",	
      link: "",
      badge: "8"
    }, {
	  
      name: 'Notifications',
      description: "description",
	  class: "glyphicon glyphicon-calendar ten-right margin-ten-top margin-ten-bottom font-size-16",
	  font:"font-size-16",
      link: "",
      badge: "1"
     },{
      name: 'Comments',
      description: "description",
      class: "glyphicon glyphicon-plus ten-right margin-ten-top margin-ten-bottom font-size-16",
	  font:"font-size-16",
	  link: "",
      badge: "0"
     }  
  ];  	
  /*Content for events*/	
  var eventList = [
    {
      name: 'Concert',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie est neque, non vestibulum ante molestie non. Nulla quis lacinia orci, quis lobortis mauris.",
      shine: 8,
      date: "12/08/2016",
      rarity: 7,
      color: '#CCC',
      faces: 14,
      images: ["img/concert.jpg"],
      reviews: [{
        stars: 5,
        body: "I love this event!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This event sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Basket',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie est neque, non vestibulum ante molestie non. Nulla quis lacinia orci, quis lobortis mauris.",
      shine: 9,
      date: "15/08/2016",
      rarity: 6,
      color: '#EEE',
      faces: 12,
      images: ["img/basket.jpg"],
      reviews: [{
        stars: 3,
        body: "I think this event was just OK.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any event like this is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    } 
  ];
})();