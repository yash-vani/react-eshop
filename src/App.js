import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import Header from './Header';
import SignIn from './login';
import SignUp from './SignUp';
import Products from './products';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {<Header></Header>}

          <Routes>
            <Route path='/*'>
              <Route index path="login" element={<SignIn />} />
            </Route>
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/products' element={<Products />} />
          </Routes>
        </div>
      </Router>
    );
  }
}



export default App;
