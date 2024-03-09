import ErrorMassage from "../errorMassage/ErrorMassage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
   return (
      <div className='fade-page'>
         <Helmet>
            <meta
               name="description"
               content="Page 404" />
            <title>404 page</title>
         </Helmet>
         <ErrorMassage/>
         <p style={{ "textAlign": "center", "fontWeight": "bold", "fontSize": "24px" }}>Ooops page not found...</p>
         <Link style={{
            "display": "block", "textAlign": "center", "fontWeight": "bold", "fontSize": "24px",
         "marginTop": "30px"}} to="/">Back to main page</Link>
      </div>
   )
}

export default Page404;