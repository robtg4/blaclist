//where we store the app's rss feeds
//these are made of api urls from kimonolabs for consistency 
//and enhanced content 

var NEWS = [];
NEWS.name = "News";

var POLITICS = [];
POLITICS.name = "Politics";

var LGBQT = [];
LGBQT.name = "LGBQT";

var BLM = [];
BLM.name = "BlackLivesMatter"; 

var ARTS = []; 
ARTS.name = "Arts"; 

var HIPHOP = ['https://www.kimonolabs.com/api/bnzhz2ha?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/55q10m3i?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/eegcmu6q?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
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

var BLACKBUZZ = ['https://www.kimonolabs.com/api/e6prkm60?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1']; 
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

var WOC = ['https://www.kimonolabs.com/api/bfq4d1ak?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
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

var DEFAULT = ['https://www.kimonolabs.com/api/3mnn320y?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1']; 
DEFAULT.name = "Default"; 

module.exports = {
  FEEDS:[NEWS, POLITICS, LGBQT, BLM, ARTS, HIPHOP, HISTORY, FASHION, STARTUPS, TECH, BUSINESS, 
  BLACKBUZZ, BLOGS, WORLD, HEALTH, TRENDING, MUSIC, SPORTS, ENT, GAMES, DESIGN, HUMOR, 
  MOC, HAPPINESS, WOC, TRAVEL, THEATER, CELEBRITY, BOOKS, MARKETING, FILM, CARS, WALLSTREET, HOME, DEFAULT], 
};