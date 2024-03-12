import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types'
import './charList.scss';
import useMarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

const setContent = (process, Component, moreCharLoading) => {
   switch (process) {
      case 'waiting':
         return <Spinner />;
      case 'loading':
         return moreCharLoading? <Component/> : <Spinner/>;
      case 'confirmed':
         return <Component/>;
      case 'error':
         return <ErrorMassage />;
      default:
         throw new Error('Unexpected process state');
 
   }
}

const CharList = (props) => {

   const [charList, setCharList] = useState([]);
   const [moreCharLoading, setMoreCharLoading] = useState(false);
   const [offset, setOffset] = useState(210);
   const [charEnded, setCharEnded] = useState(false);

   const { process, setProcess, getAllCharacters } = useMarvelService();

   useEffect(() => {
      onRequest(offset, true);
      // eslint-disable-next-line
   }, [])

   const onRequest = (offset, initial) => {

      initial ? setMoreCharLoading(false) : setMoreCharLoading(true);

      getAllCharacters(offset)
         .then(onCharListLoaded)
         .then(() => setProcess('confirmed'))
   }

   const onCharListLoaded = async (newCharList) => {
      const ended = newCharList.length < 9 ? true : false;

      const addChar = (index) => {
         if (index < newCharList.length) {
            setCharList(charList => [...charList, newCharList[index]]);
            setTimeout(() => addChar(index + 1), 300)
         } else {
            setMoreCharLoading(moreCharLoading => false);
            setOffset(offset => offset + 9);
            setCharEnded(charEnded => ended);
         }
      }

      addChar(0);
      
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
            <CSSTransition key={id} timeout={300} classNames='char__item'>
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

   return (
      <div className="char__list">
         {setContent(process, () => renderItems(charList), moreCharLoading)}
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