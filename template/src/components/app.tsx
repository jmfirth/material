import { Component, h } from 'preact';
import { Router, RouterOnChangeArgs } from 'preact-router';
import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';

export interface AppProperties { }

export interface AppState { }

export default class App extends Component<AppProperties, AppState> {
  currentUrl: string;

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = (e: RouterOnChangeArgs) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Profile path="/profile/" user="me" />
          <Profile path="/profile/:user" />
        </Router>
      </div>
    );
  }
}
