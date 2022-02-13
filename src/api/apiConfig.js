const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '4a7c600cc60d263ab60c8d32ea65cb23',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
