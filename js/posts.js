// POST ARRAY

var posts = [{
	title: "Learn C on the Mac by David Mark",
	date: "March 21, 2016",
	imgSrc: "http://hodgepodge.me/wp-content/uploads/2012/04/Learn-C-on-the-Mac-580x386.jpg",
	copy: "<p>I bought this book when I graduated college, took one flip through it and decided 'nah'. This was back in the day when iOs apps were built in Objective-C and took a lot of time, effort and computer science degrees to understand. Now that I've been immersing myself in the world of programming languages, I've decided to read about the grandfather of them all, C.</p>",
	tags: ["reading", "C", "programming", "coding", "book"]
}, {
	title: "CSS + Terminal",
	date: "February 10, 2016",
	imgSrc: "",
	copy: "<p>Up and running with the lectures! Today we talked about CSS and Terminal.</p>",
	tags: ["class", "CSS", "Terminal", "coding"]
}, {
	title: "Back to School",
	date: "January 20, 2016",
	imgSrc: "",
	copy: "<p>So after scouring the job boards in desperate search of anything but the hell I'm living (may sound dramatic, 100% valid), I finally signed up for LinkedIn Premium's trial version. With this feature I can see predicted job salaries for positions and where my resume stacks up against other applicants. This proved to be very disheartening as my field and chosen career appear to have been reduced to glorified powerpoint designers that make less than I do now (which is not a lot). Without some new skills I was going to be stuck here forever doing grunt production design until they outsourced us to India like they did with IT, accounting and customer service.</p><p>This is where NYCDA comes in. They ahd the perfect program, at the perfect price at the perfect location. I taught myself how to code HTML and CSS when I was 14 making websites for my Petz game in geocities (cringe). Since then I had gotten seduced by the glamour of graphic design a dn illustration, which was a completely plausible career choice until Steve Jobs came along with his iPad creationa dn destroyed the publication industry. Not like I blame him, but it kind of changed the game.</p><p>So here I am, back in school and gearing up to re-learn everything to todays standards so I can become hirable again. Wish me luck.</p>",
	tags: ["job", "CSS", "programming", "coding", "school", "HTML", "NYCDA", "javascript", "jquery"]
}, {
	title: "Song of Spiderman by Glen Berger",
	date: "January 10, 2016",
	imgSrc: "http://41.media.tumblr.com/4d390d1df32aee085136c5f2f1c5ac66/tumblr_nik6xlE1ap1qc0r7do1_400.jpg",
	copy: "<p>My lovely friend Kayla let me borrow this book and let me tell you, it is better than any gossip rag. Glen goes in hard and dirty on the dirt behind one of the most disastrous and expensive musicals ever, Spider-Man: Turn Off the Dark. I’m only a few dozen pages in but by the pace and name dropping (Bono!) thus far it is going to be a good read. Highly recommended to any and all, even if you aren’t a theater buff.</p><p>So far I’ve gotten through the backstory before the shit hit the fan, and it’s funny how there were some signs and warnings that are only clear now after the fact, but there were also moments where it seemed like they were riding a wave of creative genius. There is no way to tell what venture is going to work out, ain’t it fun?!</p>",
	tags: ["reading", "theater", "spiderman", "book"]
}, {
	title: "Yes Please by Amy Poehler",
	date: "January 21, 2016",
	imgSrc: "http://40.media.tumblr.com/812235d5468d33879cf1a3a459a7b8a6/tumblr_nhz7oeth0q1qc0r7do1_400.jpg",
	copy: "<p>Not sure why it took me so long to read this but I am finally reading it. Actually I know why, I have been forcing myself to figure out what I want to do with my life and reading a lot of varied books to spark some sort of passion. Last thing I was reading was Biology for Dummies because medicine had always been an interest of mine and I thought I’d peek into what that would entail. Sounds silly I know. What I have done instead is apply to volunteer at NYP which is right outside my apartment to see if that is something I’d be interested in. Probably better than reading about DNA and the process of mitosis vs meiosis.</p><p>I’m only a few chapters in but it is so entertaining and quite possibly could help me figure out what I want to do for the rest of my life anyway. It had always been a battle between arts and sciences and eight years ago, the arts won. But maybe I had chosen the wrong kind of art? Who knows.</p><p>Amy though, a woman of my own heart and fellow Virgo (9/16) knows exactly what’s up. Come on Amy, give me a sign!</p>",
	tags: ["reading", "Amy Poehler", "comedy", "book"]
}];

// SHOW POSTS

$('document').ready(function() {
	
	for (var i = 0; i < posts.length; i++) {

		var postConfig = posts[i];

		$post = $('<div class="post"></div>');
		if (postConfig.title) {
			$post.append($('<h1>' + postConfig.title + '</h1>'));
		}

		if (postConfig.date) {
			$post.append($('<p class="date">' + postConfig.date + '</p>'));
		}
		if (postConfig.imgSrc) {
			$post.append($('<img src="' + postConfig.imgSrc + '" />'));
		}
		if (postConfig.copy) {
			$post.append($(postConfig.copy));
		}

		if (postConfig.tags) {

			for (var j = 0; j < postConfig.tags.length; j++) {

				var postTag = postConfig.tags[j];

			$post.append($('<a href="javascript:;">' + '<li>' + postConfig.tags[j] + '</li>' + '</a>'));
		}
	}
		$('.posts').append($post);

	}

	// FILTER POSTS
		$('ul.filter li').on('click', function(e) {

		var target = $(e.target);
		var tagName = target.text();

		// $('.post').remove();

		if (posts.tags === tagName) {
			$('.posts').append($post);
		}

	});

});


		// if (tagName) {
		// 	$('.posts').append($post);
		// } else {
			// $('.post').empty();
		// }

		// $('.post').remove();
  //       $('.posts').append($('div.post:contains(tagName)'));

		// var target = $(e.target);
		// var tagName = target.text();

		// $(".post").addClass("hidden");
  //       $(".post:contains('" + tagName + "')").removeClass("hidden");

		// $('div.posts:contains("'+tagName+'"")').remove();

		// $('.post').hide(300);
		// $('.post').show(300, ('div.post:contains(tagName)'));

	// 	var tagName = $(this).html();
	// 	$posts.isotope({filter: tagName});
	// 	return false;
	// });

		// $('.posts').filter(function(index) {
		// 	return $(this).length === 1;
		// })

		// $(postConfig.tags).attr(tagName);

		// $('.posts').append($post);

	// });

	