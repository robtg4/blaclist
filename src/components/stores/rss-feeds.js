//where we store the app's rss feeds
//slatest: http://feeds.slate.com/slate/testfeed/SlatestFullTextRssFeed
//the root: http://www.theroot.com/articles.teaser.all.25.rss
//buzzfeed usnews: http://www.buzzfeed.com/usnews.xml
//hufington post black politics: http://feeds.huffingtonpost.com/huffingtonpost/raw_feed

var NEWS = ['http://www.buzzfeed.com/usnews.xml', 'http://www.blacknews.com/feed/',
'http://blackamericaweb.com/feed/', 'http://goodblacknews.org/feed/', 
'http://thegrio.com/feed/', 'http://www.theroot.com/articles.teaser.all.25.rss'];
NEWS.name = "News";

var POLITICS = ['http://feeds.slate.com/slate-101526', 'http://blackpoliticstoday.com/home/feed/'];
POLITICS.name = "Politics";

var LGBQT = ['http://www.lgbtqnation.com/feed/', 'http://www.musedmagonline.com/feed/'];
LGBQT.name = "LGBQT";

var BLM = ['http://blacklivesmatter.com/feed/', 'http://www.blackenterprise.com/category/lifestyle/feed'];
BLM.name = "BlackLivesMatter"; 

var ARTS = ['http://www.sohh.com/feed/']; 
ARTS.name = "Arts"; 

var HIPHOP = [];
HIPHOP.name = "Hip-Hop";

var HISTORY = []; 
HISTORY.name = "History";

var FASHION = ['http://blackfashion.tumblr.com/rss']; 
FASHION.name = "Fashion"; 

var STARTUPS = ['http://blackfounders.com/feed/', 'http://www.blackenterprise.com/category/small-business/feed/']; 
STARTUPS.name = "Entrepreneurship"; 

var TECH = ['https://www.blacksintechnology.net/feed/', 'http://techcrunch.com/feed/', 
'http://wearetechnoir.com/feed/']; 
TECH.name = "Technology";

var BUSINESS = ['http://www.tnj.com/rss.xml', 'http://www.blackenterprise.com/category/money/feed', 
'http://www.blackenterprise.com/category/career/feed']; 
BUSINESS.name = "Business"; 

var BLACKBUZZ = []; 
BLACKBUZZ.name = "Black Buzzfeed"; 

var POETRY = []; 
POETRY.name = "Poetry"; 

var WORLD = ['http://www.theguardian.com/world/rss', 'http://www.telegraph.co.uk/news/worldnews/rss', 
'http://www.npr.org/rss/rss.php?id=1001']; 
WORLD.name = "World";

var HEALTH = ['http://blackdoctor.org/feed/'];
HEALTH.name = "Health"; 

var TRENDING = []; 
TRENDING.name = 'Trending'; 

var MUSIC = ['https://www.yahoo.com/music/rss']; 
MUSIC.name = 'Music'; 

var SPORTS =['http://www.cbssports.com/partners/feeds/rss/home_news', 'http://www.blackenterprise.com/category/lifestyle/sportsbiz/feed/']; 
SPORTS.name = 'Sports'; 

var ENT = []; 
ENT.name = 'Entertainment'; 

var GAMES = []; 
GAMES.name = "Gaming";

var DESIGN = []; 
DESIGN.name = "Design"; 

var HUMOR = ['http://www.collegehumor.com/rss']; 
HUMOR.name = "Humor"; 

var MOC = ['http://healthyblackmen.org/feed/']; 
MOC.name = "Men of Color"; 

var HAPPINESS = []; 
HAPPINESS.name = "Happiness"; 

var WOC = ['http://www.npr.org/rss/rss.php?id=1015', 'http://www.bwwla.org/feed/'];
WOC.name = "Women of Color";  

var TRAVEL = []; 
TRAVEL.name = "Travel";

var PHOTOGRAPHY = ['http://www.blackenterprise.com/category/photos/feed']; 
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