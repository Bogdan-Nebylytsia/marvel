import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types'
import './charList.scss';
import useMarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

const CharList = (props) => {

   const [charList, setCharList] = useState([]);
   const [moreCharLoading, setMoreCharLoading] = useState(false);
   const [offset, setOffset] = useState(210);
   const [charEnded, setCharEnded] = useState(false);

   const { loading, error, getAllCharacters } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
      // eslint-disable-next-line
   }, [])

   const onRequest = (offset, initial) => {

      initial ? setMoreCharLoading(false) : setMoreCharLoading(true);

      getAllCharacters(offset)
         .then(onCharListLoaded)
   }

   const onCharListLoaded = async (newCharList) => {
      const ended = newCharList.length < 9 ? true : false;

      setCharList(charList => [...charList, ...newCharList]);
      setMoreCharLoading(moreCharLoading => false);
      setOffset(offset => offset + 9);
      setCharEnded(charEnded => ended);
   }

   const itemRefs = useRef([]);


   const focusOnItem = (id) => {
      itemRefs.current.forEach(element => element.classList.remove('char__item_selected'));
      itemRefs.current[id].classList.add('char__item_selected');
      itemRefs.current[id].focus();
   }

   function renderItems(arr) {
      const items = arr.map((item, i) => {
         const { thumbnail, name, id } = item;

         let imgStyle = { "objectFit": "cover" };

         if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { "objectFit": "unset" };
         }

         return (
            <CSSTransition key={id} timeout={5000} classNames='char__item'>
               <li
                  ref={el => itemRefs.current[i] = el}
                  tabIndex={0}
                  className='char__item'
                  onClick={() => {
                     props.onCharSelected(id);
                     focusOnItem(i);
                  }}
                  onKeyDown={e => {
                     if (e.key === " " || e.key === "Enter") {
                        e.preventDefault();
                        props.onCharSelected(id);
                        focusOnItem(i);
                     }
                  }}
               >
                  <img src={thumbnail} alt={name} style={imgStyle} />
                  <div className="char__name">{name}</div>
               </li>
            </CSSTransition>

         )
      });

      return (
            <ul className="char__grid">
               <TransitionGroup component={null}>
                  {items}
               </TransitionGroup>
            </ul>

      )
   }


   const items = renderItems(charList);

   const spinner = loading && !moreCharLoading ? <Spinner /> : null;
   const errorMassage = error ? <ErrorMassage /> : null;

   return (
      <div className="char__list">
         {spinner}
         {errorMassage}
         {items}
         <button
            className="button button__main button__long"
            disabled={moreCharLoading}
            style={{ "display": charEnded ? "none" : "block" }}
            onClick={() => onRequest(offset)}
         >
            <div className="inner">LOAD MORE</div>
         </button>
      </div>
   )
}

CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}

export default CharList;