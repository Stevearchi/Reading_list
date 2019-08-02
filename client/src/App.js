import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>

    <>
      <Nav />
      <Switch>
      <Route exact path="/" component={Books} />
      <Route exact path="/books" component={Books} />
      <Route exact path="/books/:id" render={props => <Detail {...props} day="wednesday" /> } />   {/* ... is the spread operator*/}
      <Route component={NoMatch} />
      </Switch>
    </>
    </Router>
  );
}


// * Notice that in the `pages` folder we have a `Detail` component. This component displays additional information about a book.

// * Add a route for the the new `Detail` component. This should render when the `/books/:id` path is matched. e.g. if a 
// book's `_id` is `59a39cf2549cf482c814333f`, then `/books/59a39cf2549cf482c814333f` should render its book `Detail` page.

// * Inside of the `Detail` component, add code so that when the component mounts, we retrieve the book for the rendered route and 
// save it to `this.state.book`. e.g. when the route is `/books/59a39cf2549cf482c814333f`, an AJAX request should be made to get the book with an `_id` of `59a39cf2549cf482c814333f`. If completed successfully, you should see the book's synopsis on this page.

//   * You may need to look into [URL params with React Router](https://reacttraining.com/react-router/web/example/url-params) to 
//   accomplish this.

//   * To access props in a class component you must use `this.props` instead of `props`.



export default App;
