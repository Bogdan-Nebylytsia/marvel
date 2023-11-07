import img from './error.gif';

const ErrorMassage = () => {
   return (
      <img src={img} alt="error" style={{
         margin: '0 auto', background: 'none', display: 'block',
         width: '250px', height: '250px', objectFit: 'contain'
      }} />
   )
}

export default ErrorMassage;