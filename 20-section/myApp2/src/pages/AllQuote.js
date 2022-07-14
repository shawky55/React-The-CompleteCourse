import QuoteList from '../components/quotes/QuoteList';

const QUOTES_DATA = [
  { id: 'q1', author: 'ali', text: 'Learning JavaScript is fun!' },
  { id: 'q2', author: 'sara', text: 'Learning Programming is great!' },
];

const AllQuote = () => {
  return <QuoteList quotes={QUOTES_DATA}></QuoteList>;
};
export default AllQuote;
