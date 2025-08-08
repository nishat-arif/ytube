export const btnTextList = ['All' , 'Music', 'Mixes','Tomorrowland' , 'Contemprary','Podcasts', 'Arijit Singh' , 'Artificial Intelligence', 'Skills' , 'live' , 'Software Engineering']

export const videoList_apiKey = 'AIzaSyAFu5Kpx0vd21etiN_WehkFN_uW9LPTVnw';

export const videoListUrl = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + videoList_apiKey;


export const searchApi = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q="

export const CORS_PROXY  = "https://corsproxy.io/?" // to bypass CORS policy issue 