import { useState, useEffect } from 'react';
import useMarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

import './singleComicPage.scss';
import { Link, useParams } from 'react-router-dom';

const SingleComicPage = () => {
   const { comicId } = useParams();
   const [ comic, setComic ] = useState({});

   const {loading, error, clearError, getComic} = useMarvelService();

   useEffect(() => {
      updateComic();
      window.scrollTo({
         top: 90,
         behavior: "smooth",
       });
   }, [comicId])

   const updateComic = () => {
      clearError();

      getComic(comicId)
      .then(onComicLoaded)
   }
   
   const onComicLoaded = (comic) => {
      setComic(comic);
   }

   const errorMassage = error ? <ErrorMassage /> : null; 
   const spinner = loading ? <Spinner /> : null;
   const content = !(error || loading || !comic) ? <View comic={comic} /> : null;

   return (
      <div className='fade-page'>
         {errorMassage}
         {spinner}
         {content}
      </div>
   )
}

const View = ({ comic }) => {
   const { title, thumbnail, price, description, pageCount, language } = comic;

   return (
      <div className="single-comic fade-page">
         <img src={thumbnail} alt={title} className="single-comic__img" />
         <div className="single-comic__info">
            <h2 className="single-comic__name">{title}</h2>
            <p className="single-comic__descr">{description}</p>
            <p className="single-comic__descr">{pageCount}</p>
            <p className="single-comic__descr">Language: {language}</p>
            <div className="single-comic__price">{price}</div>
         </div>
         <Link to={'/comics'} className="single-comic__back">Back to all</Link>
      </div>
   )
}

export default SingleComicPage;