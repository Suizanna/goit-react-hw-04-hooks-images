import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';

const Spinner = () => {
  return (
    <div className={s.Spinner}>
       <Loader
         type="Grid" color="#00BFFF" height={80} width={80} 
      />
    </div>
  );
};

export default Spinner;
