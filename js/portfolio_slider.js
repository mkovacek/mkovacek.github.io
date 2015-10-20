$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Management system for veterinary clinics',
			'description'   :'The web app is used to record and monitor customers of veterinary clinics.',
			'thumbnail' : ['img/portfolio/small/ecuko1.png','img/portfolio/small/ecuko7.png', 'img/portfolio/small/ecuko2.png', 'img/portfolio/small/ecuko3.png', 'img/portfolio/small/ecuko4.png', 'img/portfolio/small/ecuko5.png','img/portfolio/small/ecuko6.png'],
			'large' : ['img/portfolio/large/ecuko1.png','img/portfolio/large/ecuko7.png' ,'img/portfolio/large/ecuko2.png', 'img/portfolio/large/ecuko3.png', 'img/portfolio/large/ecuko4.png', 'img/portfolio/large/ecuko5.png','img/portfolio/large/ecuko6.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Web-app-for-veterinary-clinics' }
			],
			'tags'  : ['Web','All']
			},

			{
			'title' : 'Renaissance Fair',
			'description'   : 'Ren Fest represents a mobile application which allows its users to find out useful information about the Renaissance Fair in Koprivnica, Croatia. By using this application its users can browse through the festival program and check out the details about related events. The application also includes a map of the mention events, nearby hotels and restaurants. Ren Fest is available in English and Croatian.',
			'thumbnail' : ['img/portfolio/small/renfest1.png', 'img/portfolio/small/renfest2.png', 'img/portfolio/small/renfest3.png', 'img/portfolio/small/renfest4.png','img/portfolio/small/renfest5.png','img/portfolio/small/renfest6.png'],
			'large' : ['img/portfolio/large/renfest1.png', 'img/portfolio/large/renfest2.png', 'img/portfolio/large/renfest3.png', 'img/portfolio/large/renfest4.png','img/portfolio/large/renfest5.png','img/portfolio/large/renfest6.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Ionic-firebase-festival-app' },
			],
			'tags'  : ['Mobile','All']
			},

			{
			'title' : 'Simple ROR CRUD web app',
			'description'   : 'Ruby on rails, Materialize, Google maps, Twitter widgets, Facebook pages, Wistia',
			'thumbnail' : ['img/portfolio/small/ror1.png','img/portfolio/small/ror2.png', 'img/portfolio/small/ror3.png'],
			'large' : ['img/portfolio/large/ror1.png','img/portfolio/large/ror2.png', 'img/portfolio/large/ror3.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Ruby-on-Rails-CRUD' },
			{ 'title':'Demo', 'url':'https://calm-basin-6145.herokuapp.com'}
			],
			'tags'  : ['Web', 'All']
			},

			{
			'title' : 'Chat app',
			'description'   : 'Simple chat mobile app, like whatsApp lite version',
			'thumbnail' : ['img/portfolio/small/chat1.png', 'img/portfolio/small/chat2.png', 'img/portfolio/small/chat3.png', 'img/portfolio/small/chat4.png', 'img/portfolio/small/chat5.png', 'img/portfolio/small/chat6.png', 'img/portfolio/small/chat7.png'],
			'large' : ['img/portfolio/large/chat1.png', 'img/portfolio/large/chat2.png', 'img/portfolio/large/chat3.png', 'img/portfolio/large/chat4.png','img/portfolio/large/chat5.png', 'img/portfolio/large/chat6.png', 'img/portfolio/large/chat7.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Ionic-CouchDB-chat-app' }
			],
			'tags'  : ['Mobile','All']
			},

			{
			'title' : 'Web app for testing cryptography',
			'description'   : 'Symmetric and asymmetric cryptography, digital signature (AES,RSA,md5)',
			'thumbnail' : ['img/portfolio/small/crypto1.png','img/portfolio/small/crypto2.png', 'img/portfolio/small/crypto3.png', 'img/portfolio/small/crypto4.png', 'img/portfolio/small/crypto5.png'],
			'large' : ['img/portfolio/large/crypto1.png','img/portfolio/large/crypto2.png', 'img/portfolio/large/crypto3.png', 'img/portfolio/large/crypto4.png','img/portfolio/large/crypto5.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Web-app-for-testing-cryptography' }
			],
			'tags'  : ['Web','All']
			},

			{
			'title' : 'Desktop app for food ordering',
			'description'   : 'Desktop app allows client to order food, tracking status about order and client can see his order history. Employee in restaurant can see received orders, can put status about orders and can see statistics about orders.',
			'thumbnail' : ['img/portfolio/small/fo1.png', 'img/portfolio/small/fo2.png', 'img/portfolio/small/fo3.png', 'img/portfolio/small/fo4.png', 'img/portfolio/small/fo5.png'],
			'large' : ['img/portfolio/large/fo1.png', 'img/portfolio/large/fo2.png', 'img/portfolio/large/fo3.png', 'img/portfolio/large/fo4.png', 'img/portfolio/large/fo5.png'],
			'button_list'   :
			[
			{ 'title':'Github', 'url' : 'https://github.com/mkovacek/Desktop-app-for-food-ordering' }
			],
			'tags'  : ['Desktop','All']
			}
		]
	});
});