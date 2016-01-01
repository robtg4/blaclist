//where we store the app's rss feeds
//these are made of api urls from kimonolabs for consistency 
//and enhanced content 

var NEWS = ['https://www.kimonolabs.com/api/crkywa8c?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
NEWS.name = "News";

var POLITICS = ['https://www.kimonolabs.com/api/byeh7eiu?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/dq70bg20?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
POLITICS.name = "Politics";

var LGBQT = ['https://www.kimonolabs.com/api/95b0meoa?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/50w0vdou?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
LGBQT.name = "LGBQT";

var BLM = ['https://www.kimonolabs.com/api/7igz6dsw?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
BLM.name = "BlackLivesMatter"; 

var ARTS = ['https://www.kimonolabs.com/api/48i8b73g?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
ARTS.name = "Arts"; 

var HIPHOP = ['https://www.kimonolabs.com/api/66ytckus?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE',
'https://www.kimonolabs.com/api/1yhip7y4?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
HIPHOP.name = "Hip-Hop";

var HISTORY = ['https://www.kimonolabs.com/api/dufmw85u?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
HISTORY.name = "History";

var FASHION = ['https://www.kimonolabs.com/api/4nlj00lw?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/24dzw25w?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/3hyjtpyy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
FASHION.name = "Fashion"; 

var STARTUPS = ['https://www.kimonolabs.com/api/ehywlf16?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
STARTUPS.name = "Entrepreneurship"; 

var TECH = ['https://www.kimonolabs.com/api/dabb82c8?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/6s9d5pdg?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
TECH.name = "Technology";

var BUSINESS = []; 
BUSINESS.name = "Business"; 

var BLACKBUZZ = ['https://www.kimonolabs.com/api/b5r0j28i?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
BLACKBUZZ.name = "Black Buzzfeed"; 

var POETRY = []; 
POETRY.name = "Poetry"; 

var WORLD = ['https://www.kimonolabs.com/api/54xblsqm?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
WORLD.name = "World";

var HEALTH = ['https://www.kimonolabs.com/api/3m0ii7ca?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
HEALTH.name = "Health"; 

var TRENDING = []; 
TRENDING.name = 'Trending'; 

var MUSIC = ['https://www.kimonolabs.com/api/a5iszcra?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/8e1vktuc?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE',
'https://www.kimonolabs.com/api/c78lje40?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
MUSIC.name = 'Music'; 

var SPORTS =['https://www.kimonolabs.com/api/4g5mejqo?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/altyt7nc?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
SPORTS.name = 'Sports'; 

var ENT = ['https://www.kimonolabs.com/api/cqt9k7a2?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
ENT.name = 'Entertainment'; 

var GAMES = []; 
GAMES.name = "Gaming";

var DESIGN = []; 
DESIGN.name = "Design"; 

var HUMOR = []; 
HUMOR.name = "Humor"; 

var MOC = ['https://www.kimonolabs.com/api/4nlj00lw?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/3hyjtpyy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
MOC.name = "Men of Color"; 

var HAPPINESS = []; 
HAPPINESS.name = "Happiness"; 

var WOC = ['https://www.kimonolabs.com/api/84nsjymc?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE',
'https://www.kimonolabs.com/api/bzzg9s1u?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/99q84pko?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/6oomuzpy?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE'];
WOC.name = "Women of Color";  

var TRAVEL = ['https://www.kimonolabs.com/api/5k2vjyhw?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
TRAVEL.name = "Travel";

var PHOTOGRAPHY = []; 
PHOTOGRAPHY.name = "Photogrpahy"; 

var UNIVERSE = [];
UNIVERSE.name = "Universe"; 

var INTERNET = []; 
INTERNET.name = "Internet"; 

var THEATER = ['https://www.kimonolabs.com/api/d0bpzqve?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
THEATER.name = "Theater"; 

var CELEBRITY = ['https://www.kimonolabs.com/api/79l57pss?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 
'https://www.kimonolabs.com/api/eiv4f3lo?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
CELEBRITY.name = "Celebrity News"

var BOOKS = []; 
BOOKS.name = "Books"; 

var MARKETING =[]; 
MARKETING.name = "Marketing"; 

var FILM = ['https://www.kimonolabs.com/api/40nuptnq?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
FILM.name = "Film"; 

var CARS = ['https://www.kimonolabs.com/api/d4abojl8?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
CARS.name = "Auto"; 

var WALLSTREET = []; 
WALLSTREET.name = "Black Wall Street";

var HOME = []; 
HOME.name = "Home Decorating";

var DEFAULT = ['https://www.kimonolabs.com/api/2mh8mwos?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE', 'https://www.kimonolabs.com/api/b5r0j28i?apikey=RrrlPrWddE8EflaLM7iVdF5pKN0w0lqE']; 
DEFAULT.name = "Default"; 

module.exports = {
  FEEDS:[NEWS, POLITICS, LGBQT, BLM, ARTS, HIPHOP, HISTORY, FASHION, STARTUPS, TECH, BUSINESS, 
  BLACKBUZZ, POETRY, WORLD, HEALTH, TRENDING, MUSIC, SPORTS, ENT, GAMES, DESIGN, HUMOR, 
  MOC, HAPPINESS, WOC, TRAVEL, PHOTOGRAPHY, UNIVERSE, INTERNET, THEATER, CELEBRITY, BOOKS, 
  MARKETING, FILM, CARS, WALLSTREET, HOME, DEFAULT], 
};