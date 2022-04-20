import { Redirect,Route,Switch } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Comments from "./components/comments/Comments";
import Layout from "./components/layout/Layout";
import NotFound404 from "./pages/NotFound404";


function App() {

  return (
    <Layout>
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quote"/>
      </Route>
      <Route path="/quote" exact >
        <AllQuotes />
      </Route>
      <Route path="/new-quote">
        <NewQuotes/>
      </Route>
      <Route path="/quote/:quoteId">
        <QuoteDetail/>
      </Route>
      <Route path="/quote/:quoteId/comments">
        <Comments/>
      </Route>
      <Route path='*'>
        <NotFound404 />
      </Route>
      </Switch>
      </Layout>
  );
}

export default App;
