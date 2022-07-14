import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
  const addQuoteHandler = (newQuote) => {
    console.log(newQuote);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
