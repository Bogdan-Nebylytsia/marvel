import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
   const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
   const _apiKey = 'apikey=6fd4c27ab8f0c4a825d883b3b3700407';
   const _baseOffset = 210;

   const { loading, error, clearError, request} = useHttp();
   
    const getAllCharacters = async (offset = _baseOffset) => {
      const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);

      return res.data.results.map(_transformCharacter);
   }

   const getCharacterByName = async (name) => {
      const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);

      return res.data.results.map(_transformCharacter);
   }

   const getCharacter = async (id) => {
      const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);

      return _transformCharacter(res.data.results[0]);
   }

   const getAllComics = async (offset = 0) => {
      const res = await request(`${_apiBase}comics?orderBy=issueNumber&offset=${offset}&limit=8&${_apiKey}`);

      return res.data.results.map(_transformComics);
   }

   const getComic = async (id) => {
      const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);

      return _transformComic(res.data.results[0]);
   }

   const _transformComics = (comics) => {
      return ({
         id: comics.id,
         title: comics.title,
         thumbnail: `${comics.thumbnail.path}.${comics.thumbnail.extension}`,
         price: comics.prices[0].price ? `${comics.prices[0].price}$` : 'NOT AVAILABLE'
      })
   }

   const _transformCharacter = (char) => {
      const charDescr = char.description ? (char.description.length > 210 ? `${char.description.substring(0, 210)}...` :
         char.description) : "Unfortunately, there is no description about this character...";

      return ({
         id: char.id,
         name: char.name,
         description: charDescr,
         thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
         homepage: char.urls[0].url,
         wiki: char.urls[1].url,
         comics: char.comics.items
      })
   }

   const _transformComic = (comic) => {
      return ({
         id: comic.id,
         title: comic.title,
         thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
         price: comic.prices[0].price ? `${comic.prices[0].price}$` : 'NOT AVAILABLE',
         description: comic.description || "There is no description",
         pageCount: comic.pageCount ? `${comic.pageCount} pages` : 'No information about the number of pages',
         language: comic.textObjects[0]  ?  comic.textObjects[0].language : 'en-us'
      })
   }

   return {loading, error, clearError, getAllCharacters, getCharacter, getAllComics, getComic, getCharacterByName}
}

export default useMarvelService;