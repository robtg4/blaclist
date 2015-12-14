//where we store the app's rss feeds
//slatest: http://feeds.slate.com/slate/testfeed/SlatestFullTextRssFeed
//the root: http://www.theroot.com/articles.teaser.all.25.rss
//buzzfeed usnews: http://www.buzzfeed.com/usnews.xml
//hufington post black politics: http://feeds.huffingtonpost.com/huffingtonpost/raw_feed

//http://www.blacknews.com/feed/ -> no images
//http://blackamericaweb.com/feed/ -> diff
//http://thegrio.com/feed/ -> diff
var NEWS = ['http://www.buzzfeed.com/usnews.xml',
'http://goodblacknews.org/feed/', 'http://www.theroot.com/articles.teaser.all.25.rss'];
NEWS.name = "News";

//http://blackpoliticstoday.com/home/feed/ -> diff
var POLITICS = ['http://feeds.slate.com/slate-101526'];
POLITICS.name = "Politics";

//http://www.lgbtqnation.com/feed/ -> no images
//http://www.musedmagonline.com/feed/ -> no images
var LGBQT = [];
LGBQT.name = "LGBQT";

//'http://www.blackenterprise.com/category/lifestyle/feed'
//http://blacklivesmatter.com/feed/ -> diff
var BLM = [];
BLM.name = "BlackLivesMatter"; 

//http://www.sohh.com/feed/ -> diff
var ARTS = []; 
ARTS.name = "Arts"; 

var HIPHOP = [];
HIPHOP.name = "Hip-Hop";

var HISTORY = []; 
HISTORY.name = "History";

//needs to be treated differently from the rest (image based diff structure)
var FASHION = ['http://blackfashion.tumblr.com/rss']; 
FASHION.name = "Fashion"; 

//'http://www.blackenterprise.com/category/small-business/feed/'
//'http://blackfounders.com/feed/'
var STARTUPS = []; 
STARTUPS.name = "Entrepreneurship"; 

//'https://www.blacksintechnology.net/feed/', 
//http://wearetechnoir.com/feed/ -> diff
var TECH = ['http://techcrunch.com/feed/']; 
TECH.name = "Technology";

//'http://www.blackenterprise.com/category/money/feed'
//'http://www.blackenterprise.com/category/career/feed'
//http://www.tnj.com/rss.xml -> diff
var BUSINESS = []; 
BUSINESS.name = "Business"; 

var BLACKBUZZ = []; 
BLACKBUZZ.name = "Black Buzzfeed"; 

var POETRY = []; 
POETRY.name = "Poetry"; 

//http://www.theguardian.com/world/rss -> no images
//http://www.telegraph.co.uk/news/worldnews/rss -> doesn't show
//http://www.npr.org/rss/rss.php?id=1001 -> no images 
var WORLD = []; 
WORLD.name = "World";

//http://blackdoctor.org/feed/ -> diff
var HEALTH = [];
HEALTH.name = "Health"; 

var TRENDING = []; 
TRENDING.name = 'Trending'; 

//https://www.yahoo.com/music/rss -> no images
var MUSIC = []; 
MUSIC.name = 'Music'; 

//http://www.blackenterprise.com/category/lifestyle/sportsbiz/feed/'
//http://www.cbssports.com/partners/feeds/rss/home_news -> no images
var SPORTS =[]; 
SPORTS.name = 'Sports'; 

var ENT = []; 
ENT.name = 'Entertainment'; 

var GAMES = []; 
GAMES.name = "Gaming";

var DESIGN = []; 
DESIGN.name = "Design"; 

//http://www.collegehumor.com/rss -> no images
var HUMOR = []; 
HUMOR.name = "Humor"; 

//http://healthyblackmen.org/feed/ -> diff
var MOC = []; 
MOC.name = "Men of Color"; 

var HAPPINESS = []; 
HAPPINESS.name = "Happiness"; 

//http://www.npr.org/rss/rss.php?id=1015 -> no images
//http://www.bwwla.org/feed/ -> diff
var WOC = [];
WOC.name = "Women of Color";  

var TRAVEL = []; 
TRAVEL.name = "Travel";

//http://www.blackenterprise.com/category/photos/feed -> no images 
var PHOTOGRAPHY = []; 
PHOTOGRAPHY.name = "Photogrpahy"; 

var UNIVERSE = [];
UNIVERSE.name = "Universe"; 

var INTERNET = []; 
INTERNET.name = "Internet"; 

var THEATER = []; 
THEATER.name = "Theater"; 

var CELEBRITY = []; 
CELEBRITY.name = "Celebrity News"

var BOOKS = []; 
BOOKS.name = "Books"; 

var MARKETING =[]; 
MARKETING.name = "Marketing"; 

var FILM = []; 
FILM.name = "Film"; 

var CARS = []; 
CARS.name = "Auto"; 

var WALLSTREET = []; 
WALLSTREET.name = "Black Wall Street";

var HOME = []; 
HOME.name = "Home Decorating";

module.exports = {
  FEEDS:[NEWS, POLITICS, LGBQT, BLM, ARTS, HIPHOP, HISTORY, FASHION, STARTUPS, TECH, BUSINESS, 
  BLACKBUZZ, POETRY, WORLD, HEALTH, TRENDING, MUSIC, SPORTS, ENT, GAMES, DESIGN, HUMOR, 
  MOC, HAPPINESS, WOC, TRAVEL, PHOTOGRAPHY, UNIVERSE, INTERNET, THEATER, CELEBRITY, BOOKS, 
  MARKETING, FILM, CARS, WALLSTREET, HOME], 
};