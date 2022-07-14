import { Route, useParams, useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import NotFound from '../components/UI/NotFound';
const QUOTES_DATA = [
  { id: 'q1', author: 'ali', text: 'Learning JavaScript is fun!' },
  { id: 'q2', author: 'sara', text: 'Learning Programming is great!' },
];
const QuoteDetails = () => {
  const routeMatch = useRouteMatch();
  console.log("url",routeMatch.url)
  console.log('path',routeMatch.path)
  const quoteParams = useParams();
  const quoteId = quoteParams.quoteId;
  const selectedQuote = QUOTES_DATA.find((quote) => quote.id === quoteId);
  if (!selectedQuote) {
    return (
      <Route path="">
        <NotFound></NotFound>
      </Route>
    );
  }
  return (
    <>
      <HighlightedQuote
        text={selectedQuote.text}
        author={selectedQuote.author}
      />
      <Route path={`/quote-details/${quoteId}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
            load comments
          </Link>
        </div>
      </Route>
      <Route path={`${routeMatch.path}/comments`}>
        <Comments></Comments>
      </Route>
    </>
  );
};
export default QuoteDetails;
