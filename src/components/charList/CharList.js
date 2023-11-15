import { Component } from 'react';
import PropTypes from 'prop-types'
import './charList.scss';
import MarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

class CharList extends Component {
   state = {
      charList: [],
      loading: true,
      error: false,
      moreCharLoading: false,
      offset: 210,
      charEnded: false
   }

   marvelService = new MarvelService();

   componentDidMount() {
      this.onRequest();
   }

   onRequest = (offset) => {
      this.onCharListLoading();

      this.marvelService
         .getAllCharacters(offset)
         .then(this.onCharListLoaded)
         .catch(this.onError);
   }

   onCharListLoading = () => {
      this.setState({
         moreCharLoading: true
      })
   }

   onCharListLoaded = (newCharList) => {
      const ended = newCharList.length < 9 ? true : false;

      this.setState(({ charList, offset }) => ({
         charList: [...charList, ...newCharList],
         loading: false,
         moreCharLoading: false,
         offset: offset + 9,
         charEnded: ended
      }))
   }

   onError = () => {
      this.setState({
         error: true,
         loading: false
      })
   }

   itemRefs = [];

   setRef = (ref) => {
      this.itemRefs.push(ref);
   }

   focusOnItem = (id) => {
      this.itemRefs.forEach(element => element.classList.remove('char__item_selected'));
      this.itemRefs[id].classList.add('char__item_selected');
      this.itemRefs[id].focus();
   }

   renderItems = (charList) => {
      const items = charList.map((item, i) => {
         const { thumbnail, name, id } = item;

         let imgStyle = { "objectFit": "cover" };

         if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { "objectFit": "unset" };
         }

         return (
            <li
               ref={this.setRef}
               tabIndex={0}
               className='char__item'
               key={id}
               onClick={() => {
                  this.props.onCharSelected(id);
                  this.focusOnItem(i);
               }}
               onKeyDown={e => {
                  if (e.key === " " || e.key === "Enter") {
                     this.props.onCharSelected(id);
                     this.focusOnItem(i);
                  }
               }}
            >
               <img src={thumbnail} alt={name} style={imgStyle} />
               <div className="char__name">{name}</div>
            </li>
         )
      });

      return (
         <ul className="char__grid">
            {items}
         </ul>
      )
   }



   render() {
      const { charList, loading, error, moreCharLoading, offset, charEnded } = this.state;

      const items = this.renderItems(charList);

      const spinner = loading ? <Spinner /> : null;
      const errorMassage = error ? <ErrorMassage /> : null;
      const content = !(loading || error) ? items : null;

      return (
         <div className="char__list">
            {spinner}
            {errorMassage}
            {content}
            <button
               className="button button__main button__long"
               disabled={moreCharLoading}
               style={{ "display": charEnded ? "none" : "block" }}
               onClick={() => this.onRequest(offset)}
            >
               <div className="inner">LOAD MORE</div>
            </button>
         </div>
      )
   }


}

CharList.propTypes = {
   onCharSelected: PropTypes.func.isRequired
}

export default CharList;