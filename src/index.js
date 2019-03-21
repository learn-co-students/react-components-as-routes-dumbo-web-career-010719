import React from 'react';
import ReactDOM from 'react-dom';
/* Add NavLink to importer */
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

/* add the navbar component */
/* set exact so it knows to only set activeStyle when route is deeply equal to link */
/* add styling to Navlink */
/* add prop for activeStyle */
const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{ background: 'darkblue' }}>Signup</NavLink>
    <NavLink to="/messages" exact style={link} activeStyle={{ background: 'darkblue' }}>Messages</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >About</NavLink>
    <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Login</NavLink>
  </div>;

const Home = () => <h1>Home!</h1>;

const About = () => <h1>This is my about component!</h1>;

const Login = () =>
  <form>
    <h1>Login</h1>
    <div>
      <input type="text" name="username" placeholder="Username" />
      <label htmlFor="username">Username</label>
    </div>
    <div>
      <input type="password" name="password" placeholder="Password" />
      <label htmlFor="password">Password</label>
    </div>
    <input type="submit" value="Login" />
  </form>;

const Signup = () => <h1>Sign up here!</h1>

const Messages = () => <h3>All Messages</h3>

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" render={Signup} />
      <Route exact path="/messages" render={Messages} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// in this case component or render work since they are defined in this doc
