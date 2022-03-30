import { ThreeCircles } from 'react-loader-spinner';
import styles from './Loader.module.css';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default function Loader() {
  return (
    <div className={styles.Loader}>
      <ThreeCircles
        margin-left = {500}
        color="red"
        outerCircleColor="blue" 
        innerCircleColor="green" 
        height={50}
        width={50}
        ariaLabel="three-circles-rotating"
      /> 
    </div>
  );
}
