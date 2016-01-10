//where we store the app's rss feeds
//these are made of api urls from kimonolabs for consistency 
//and enhanced content 

var NEWS = ['https://www.kimonolabs.com/api/9ubc8rmg?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
NEWS.name = "News";

var POLITICS = ['https://www.kimonolabs.com/api/24qd1qyy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/dtzowgh4?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
POLITICS.name = "Politics";

var LGBQT = ['https://www.kimonolabs.com/api/copcks1s?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/3mzjkz88?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1',
'https://www.kimonolabs.com/api/23d7uk1y?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
LGBQT.name = "LGBQT";

var BLM = ['https://www.kimonolabs.com/api/7klgnrow?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/ckis0228?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
BLM.name = "BlackLivesMatter"; 

var ARTS = []; 
ARTS.name = "Arts"; 

var HIPHOP = [];
HIPHOP.name = "Hip-Hop";

var HISTORY = []; 
HISTORY.name = "History";

var FASHION = []; 
FASHION.name = "Fashion"; 

var STARTUPS = []; 
STARTUPS.name = "Entrepreneurship"; 

var TECH = []; 
TECH.name = "Technology";

var BUSINESS = []; 
BUSINESS.name = "Business"; 

var BLACKBUZZ = []; 
BLACKBUZZ.name = "Black Buzzfeed"; 

var BLOGS = []; 
BLOGS.name = "Blogs"; 

var WORLD = []; 
WORLD.name = "World";

var HEALTH = [];
HEALTH.name = "Health"; 

var TRENDING = []; 
TRENDING.name = 'Trending'; 

var MUSIC = []; 
MUSIC.name = 'Music'; 

var SPORTS =[]; 
SPORTS.name = 'Sports'; 

var ENT = []; 
ENT.name = 'Entertainment'; 

var GAMES = []; 
GAMES.name = "Gaming";

var DESIGN = []; 
DESIGN.name = "Design"; 

var HUMOR = []; 
HUMOR.name = "Humor"; 

var MOC = []; 
MOC.name = "Men of Color"; 

var HAPPINESS = []; 
HAPPINESS.name = "Happiness"; 

var WOC = [];
WOC.name = "Women of Color";  

var TRAVEL = []; 
TRAVEL.name = "Travel";

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

var DEFAULT = ['https://www.kimonolabs.com/api/3enwmiyy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1']; 
DEFAULT.name = "Default"; 

module.exports = {
  FEEDS:[NEWS, POLITICS, LGBQT, BLM, ARTS, HIPHOP, HISTORY, FASHION, STARTUPS, TECH, BUSINESS, 
  BLACKBUZZ, BLOGS, WORLD, HEALTH, TRENDING, MUSIC, SPORTS, ENT, GAMES, DESIGN, HUMOR, 
  MOC, HAPPINESS, WOC, TRAVEL, THEATER, CELEBRITY, BOOKS, MARKETING, FILM, CARS, WALLSTREET, HOME, DEFAULT], 
};