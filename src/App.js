import './App.css';
import {Route, Routes} from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import GuestLayout from "./layout/GuestLayout";
import Header from "./components/Header";
import ShowWorkers from "./components/ShowWorkers";
import ShowWorker from "./components/ShowWorker";
import ShowOffer from "./components/ShowOffer";
import ShowOffers from "./components/ShowOffers";
import Error from "./components/Error";
import Footer from "./components/Footer";
import CreateWorker from "./components/CreateWorker/CreateWorker";
import CreateOffer from "./components/CreateOffer";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Get from "./components/Get";
import AboutForWorker from "./components/AboutForWorker";
import React from "react";

function App() {

  return (
    <div className="App">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col min-h-screen">
          <Header/>
          <Routes>
            <Route exact path="/" element={<ShowWorkers/>}/>
            <Route exact path="/get" element={<Get/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/Registration" element={<Registration/>}/>
            <Route exact path="/jobholder/about" element={<AboutForWorker/>}/>
            <Route exact path="/jobholder/:Id" element={<ShowWorker/>}/>
            <Route exact path="/jobholder/create" element={<CreateWorker/>}/>
            <Route exact path="/offers" element={<ShowOffers/>}/>
            <Route exact path="/offer/:offerId" element={<ShowOffer/>}/>
            <Route exact path="/offer/create" element={<CreateOffer/>}/>
            <Route path="*" element={<Error/>}/>

            <Route element={<AuthLayout/>}>

            </Route>

            <Route element={<GuestLayout/>}>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/Registration" element={<Registration/>}/>
            </Route>

          </Routes>
          <Footer/>
        </div>
      </div>

    </div>
  );
}

export default App;
