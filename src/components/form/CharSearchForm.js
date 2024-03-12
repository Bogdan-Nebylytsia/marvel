import { Formik, Form, Field, ErrorMessage as FormikErrorMassage } from 'formik';
import "./charSearchForm.scss";

import { Link } from 'react-router-dom';

import { useState } from 'react';
import useMarvelService from '../../services/MarvelSevice';
import ErrorMassage from '../errorMassage/ErrorMassage';

const CharSearchForm = () => {
   const [char, setChar] = useState(null);
   const { process, setProcess, clearError, getCharacterByName } = useMarvelService();

   const onCharNameLoaded = (char) => {
      setChar(char);
   }

   const updateChar = (name) => {
      clearError();

      getCharacterByName(name)
         .then(onCharNameLoaded)
         .then(() => setProcess('confirmed'));

   }

   const criticalError = process === 'error' ? <div className="char__search-critical-error"><ErrorMassage /></div> : null;
   const result = !char ? null : char.length > 0 ?
      <div className="char__search-wrapper">
         <div className='char__search-success'>There is! Visit {char[0].name} page?</div>
         <Link to={`/char/${char[0].id}`} className="button button__secondary">
            <div className="inner">to page</div>
         </Link>
      </div>
      :
      <div className='char__search-error'>
         The character was not found. Check the name and try again
      </div>;


   return (
      <div className="char__search-form">
         <Formik
            initialValues={{ charName: "" }}
            validateOnChange={false}
            validateOnBlur={false}
            validate={values => {
               const errors = {};
               if (!values.charName) {
                  errors.charName = "This field is required";
               }
               return errors;
            }}
            onSubmit={values => {
               updateChar(values.charName);
            }}
         >
            <Form onChange={(e) => !e.target.value ? setChar(null) : null}>
               <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
               <div className="char__search-wrapper">
                  <Field className="char__search-input" type="text" name="charName" placeholder="Enter name" />
                  <button disabled={process === 'loading'} type='submit' className="button button__main">
                     <div className="inner">find</div>
                  </button>
               </div>
               <FormikErrorMassage name='charName' component='div' className='char__search-error' />
            </Form>
         </Formik>
        
         {result}
         {criticalError}

      </div>
   )
}

export default CharSearchForm;