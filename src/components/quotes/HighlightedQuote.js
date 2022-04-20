import { Fragment } from 'react/cjs/react.production.min';
import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  return (
    
    <figure className={classes.quote}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
   
  );
};

export default HighlightedQuote;
