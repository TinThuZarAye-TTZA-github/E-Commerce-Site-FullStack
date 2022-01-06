import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { UserHomePage} from "./pages/User/UserHomePage";
import { UserSignUp } from './pages/User/UserSignUp';
import { UserLogIn } from './pages/User/UserLogIn';
import { SellerSignUp } from "./pages/Seller/SellerSignUp";
import { SellerLogIn } from "./pages/Seller/SellerLogIn";
import { AddItems } from "./pages/AddItems";
import { SellerViewItem } from "./pages/SellerViewItem";
import { ListofSeller } from "./pages/ListofSeller"
import { payment } from "./pages/payment"
import { Compoments } from "./compoments/Compoments"
import { SellerHomePage } from "./pages/Seller/SellerHomePage" 
import { HomePage } from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Router>
      <Compoments></Compoments>
  {/*   <Link to="/">Home Page</Link> <div></div>
      <Link to="/usersignup">User Registration</Link><div></div>
      <Link to="/usersignup/login">User LogIn</Link><div></div>
      <Link to="/sellersignup">Seller Sing up</Link><div></div>
      <Link to="/sellersignup/login">Seller Login</Link>
  */    }

      <Switch>
        <Route path="/" exact component={HomePage}></Route>
        <Route path="/userhomepage" exact component={UserHomePage}></Route>
        <Route path="/usersignup" exact component={UserSignUp}></Route>
        <Route path="/usersignup/login" exact component={UserLogIn}></Route>
        <Route path="/sellersignup" exact component={SellerSignUp}></Route>
        <Route path="/sellersignup/login" exact component={SellerLogIn}></Route>
        <Route path="/additem" exact component={AddItems}></Route>
        <Route path="/sellerviewitem/:id" exact component={SellerViewItem}></Route>
        <Route path="/listofseller" exact component={ListofSeller}></Route>
        <Route path="/payment" exact component={payment}></Route>
        <Route path="/sellerhomepage" exact component={SellerHomePage}></Route>
        
      </Switch>
      </Router>
    </div>
  );
}

export default App;
