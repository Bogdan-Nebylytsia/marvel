import useMarvelService from '../../services/MarvelSevice';
import ErrorMassage from '../errorMassage/ErrorMassage';
import Spinner from '../spinner/Spinner';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './comicsList.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const ComicsList = () => {
   const [comicsList, setComicsList] = useState([]);
   const [offset, setOffset] = useState(58450);
   const [moreComicsLoading, setMoreComicsLoading] = useState(false);
   const [comicsEnded, setComicsEnded] = useState(false);

   const { loading, error, getAllComics } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
      // eslint-disable-next-line
   }, [])

   const onRequest = (offset, initial) => {
      initial ? setMoreComicsLoading(false) : setMoreComicsLoading(true);

      getAllComics(offset)
         .then(onComicsListLoaded)
   }

   const onComicsListLoaded = (newComicsList) => {

      const ended = newComicsList.length < 8 ? true : false;

      const addComic = (index) => {
         if (index < newComicsList.length) {
            setComicsList(comicsList => [...comicsList, newComicsList[index]]);
            setTimeout(() => addComic(index + 1), 300)
         } else {
            setOffset(offset => offset + 8);
            setMoreComicsLoading(false);
            setComicsEnded(comicsEnded => ended);
         }
      }

      addComic(0);


   }

   const renderItems = (arr) => {
      const items = arr.map((item, i) => {
         const { thumbnail, title, price, id } = item;

         let imgStyle = { "objectFit": "cover" };

         if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { "objectFit": "unset" };
         }

         return (
            <CSSTransition key={i} timeout={300} classNames="comics__item">
               <li className="comics__item">
                  <Link to={`/comics/${id}`}>
                     <img
                        src={thumbnail}
                        alt={title}
                        style={imgStyle}
                        className="comics__item-img"
                     />
                     <div className="comics__item-name">{title}</div>
                     <div className="comics__item-price">{price}</div>
                  </Link>
               </li>
            </CSSTransition>

         )
      });

      return (
         <ul className="comics__grid">
            <TransitionGroup component={null}>
               {items}
            </TransitionGroup>

         </ul>
      )
   }

   const items = renderItems(comicsList);

   const spinner = loading ? <Spinner /> : null;
   const errorMassage = error ? <ErrorMassage /> : null;

   return (
      <div className="comics__list">
         {spinner}
         {errorMassage}
         {items}
         <button className="button button__main button__long"
            style={{ 'display': comicsEnded ? 'none' : 'block' }}
            disabled={moreComicsLoading}
            onClick={() => onRequest(offset)}
         >
            <div className="inner">LOAD MORE</div>
         </button>
      </div>
   )
}

export default ComicsList;