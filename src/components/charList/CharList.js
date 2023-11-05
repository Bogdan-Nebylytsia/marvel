import { Component } from 'react';
import './charList.scss';
import MarvelService from '../../services/MarvelSevice';
import Spinner from '../spinner/Spinner';
import ErrorMassage from '../errorMassage/ErrorMassage';

class CharList extends Component {
   state = {
      charList: [],
      loading: true,
      error: false
   }

   marvelService = new MarvelService();

   componentDidMount() {
      this.marvelService
         .getAllCharacters()
         .then(this.onCharListLoaded)
         .catch(this.onError);
   }

   onCharListLoaded = (charList) => {
      this.setState({
         charList,
         loading: false,
      })
   }

   onError = () => {
      this.setState({
         error: true,
         loading: false
      })
   }


   renderItems = (arr) => {
      const items = arr.map((item) => {
         const { thumbnail, name, id } = item;

         let imgStyle = { "objectFit": "cover" };

         if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
            imgStyle = { "objectFit": "unset" };
         }

         return (
            <li
               className="char__item"
               key={id}
               onClick={() => this.props.onCharSelected(id)}
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
      const { charList, loading, error } = this.state;

      const items = this.renderItems(charList);

      const spinner = loading ? <Spinner /> : null;
      const errorMassage = error ? <ErrorMassage /> : null;
      const content = !(loading || error) ? items : null;

      return (
         <div className="char__list">
            {spinner}
            {errorMassage}
            {content}
            <button className="button button__main button__long">
               <div className="inner">LOAD MORE</div>
            </button>
         </div>
      )
   }


}

export default CharList;