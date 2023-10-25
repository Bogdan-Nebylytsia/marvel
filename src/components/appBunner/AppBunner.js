import './appBunner.scss';
import avengers from '../../resources/img/Avengers.png';
import avengersLogo from '../../resources/img/Avengers_logo.png';

const AppBunner = () => {
   return (
      <div className="app__bunner">
         <img src={avengers} alt="Avengers" />
         <div className="app__bunner-text">
            New comics every week!<br/>
               Stay tuned!
         </div>
         <img src={avengersLogo} alt="Avengers_logo" />
      </div>
   )
}

export default AppBunner;