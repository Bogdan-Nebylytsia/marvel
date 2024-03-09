import ComicsList from '../comicsList/ComicsList';
import AppBunner from '../appBunner/AppBunner';
import { Helmet } from 'react-helmet';
import { Outlet, useOutlet } from 'react-router-dom';

const ComicsPage = () => {
   const outlet = useOutlet();

   return (
      <div className='fade-page'>
         <Helmet>
            <meta
               name="description"
               content="List of marvel comics" />
            <title>Comics page</title>
         </Helmet>
         <AppBunner />
         {outlet ? <Outlet/> : <ComicsList />}
      </div>
   )
}

export default ComicsPage;