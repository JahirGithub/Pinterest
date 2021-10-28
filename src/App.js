import React from 'react';

import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/pages/UserLogin';
import Registration from './components/pages/Registration';
import AdminLogin from './components/pages/AdminLogin';
import AdminAfterLogin from './components/pages/AdminAfterLogin';
import Delete from './components/pages/Delete';
import DisplayAll from './components/pages/DisplayAllUseres'
import Search from './components/pages/Search'
import Logout from './components/pages/Logout'
import Userpanel from './components/pages/Userpanel';
import UpdateProf from './components/pages/UpdateProfile';
import UploadImage from './components/pages/UploadImage';
import ViewImage from './components/pages/ViewUserImages';
import ViewAllUserImagesAdmin from './components/pages/ViewAllUserImg';
import NavSearch from './components/pages/SearchImg';
import ContactUs from './components/pages/ContactUs';
import Allquery from './components/pages/Allquery';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/searchimg' component={NavSearch} />
        <Route path='/registration' component={Registration} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/contactus" component={ContactUs} />
          <Route path="/adminafterlogin" component={AdminAfterLogin} />
          <Route path="/userpanel" component={Userpanel} />
          <Route path="/displayall" component={DisplayAll} />
          <Route path="/delete" component={Delete} />
          <Route path="/viewalluser" component={ViewAllUserImagesAdmin} />
          <Route path="/updateprofile" component={UpdateProf} />
          <Route path="/uploadimage" component={UploadImage} />
          <Route path="/search" component={Search} />
          <Route path="/allquery" component={Allquery} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/viewimage" component={ViewImage} />
          <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;