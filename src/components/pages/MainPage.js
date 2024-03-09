import { useState } from 'react';

import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import SearchForm from '../form/CharSearchForm';

import decoration from '../../resources/img/vision.png';

const MainPage = () => {
   const [selectedChar, setChar] = useState(null);

   const onCharSelected = (id) => {
      setChar(id);
   }

   return (
      <div className='fade-page'>
         <ErrorBoundary>
            <RandomChar />
         </ErrorBoundary>
         <div className="char__content">
            <ErrorBoundary>
               <CharList onCharSelected={onCharSelected} />
            </ErrorBoundary>
            <div className='sticky__info'>
               <ErrorBoundary>
                  <CharInfo charId={selectedChar} />
               </ErrorBoundary>
               <ErrorBoundary>
                  <SearchForm />
               </ErrorBoundary>
            </div>

         </div>
         <img className="bg-decoration" src={decoration} alt="vision" />
      </div>
   )
}

export default MainPage;