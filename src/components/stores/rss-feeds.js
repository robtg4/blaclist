//where we store the app's rss feeds
//these are made of api urls from kimonolabs for consistency 
//and enhanced content 

var NEWS = ['https://www.kimonolabs.com/api/7obk1xko?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1',
'https://www.kimonolabs.com/api/2y2zpnh2?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/bu2tu1c0?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/elx8ew6m?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/a8dfp6lm?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/9ubc8rmg?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
NEWS.name = "News";

var POLITICS = ['https://www.kimonolabs.com/api/8a8h0aq6?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/24qd1qyy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1', 
'https://www.kimonolabs.com/api/dtzowgh4?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE&kimmodify=1'];
POLITICS.name = "Politics";

var LGBQT = [];
LGBQT.name = "LGBQT";

var BLM = [];
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

var POETRY = []; 
POETRY.name = "Poetry"; 

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

var DEFAULT = []; 
DEFAULT.name = "Default"; 

module.exports = {
  FEEDS:[NEWS, POLITICS, LGBQT, BLM, ARTS, HIPHOP, HISTORY, FASHION, STARTUPS, TECH, BUSINESS, 
  BLACKBUZZ, POETRY, WORLD, HEALTH, TRENDING, MUSIC, SPORTS, ENT, GAMES, DESIGN, HUMOR, 
  MOC, HAPPINESS, WOC, TRAVEL, THEATER, CELEBRITY, BOOKS, MARKETING, FILM, CARS, WALLSTREET, HOME, DEFAULT], 
};