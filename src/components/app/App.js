import { useState } from 'react';
import AppHeader from "../appHeader/AppHeader";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from '../comicsList/ComicsList';

import decoration from '../../resources/img/vision.png';
import AppBunner from '../appBunner/AppBunner';

const App = () => {

  const [selectedChar, setChar] = useState(null); 

  const onCharSelected = (id) => {
    setChar(id);
  }

    return (
      <div className="app">
        <AppHeader />
        <main>
          <ErrorBoundary>
            <AppBunner />
            <ComicsList/>
          </ErrorBoundary>
          
          
        {/* <ErrorBoundary>
            <RandomChar />
        </ErrorBoundary> */}
          <div className="char__content">
            {/* <ErrorBoundary>
              <CharList onCharSelected={onCharSelected} />
            </ErrorBoundary>
            <ErrorBoundary>
              <CharInfo charId={selectedChar} />
            </ErrorBoundary> */}
          </div>
          {/* <img className="bg-decoration" src={decoration} alt="vision" /> */}
        </main>
      </div>
    )
}

export default App;
