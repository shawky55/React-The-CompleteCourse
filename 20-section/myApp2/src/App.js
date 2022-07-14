import { Redirect, Switch, Route } from 'react-router-dom';
import AllQuote from './pages/AllQuote';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
import QuoteDetails from './pages/QuoteDetails';
import NotFound from './components/UI/NotFound';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/new-quote"></Redirect>
        </Route>
        <Route path="/all-quotes">
          <AllQuote></AllQuote>
        </Route>
        <Route path="/new-quote">
          <NewQuote></NewQuote>
        </Route>
        <Route path="/quote-details/:quoteId">
          <QuoteDetails></QuoteDetails>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
