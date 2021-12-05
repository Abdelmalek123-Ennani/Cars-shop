import React from 'react'
import Admin from '../admin/Admin'
import Home from '../../statefull/Home/Home'
import Navbar from '../navbar/Navbar'
import {Route} from 'react-router-dom'
import Footer from '../footer/Footer'

function Site() {
    return (
        <div>

           <Navbar />
                <div className="site">
                    <Route path="/" exact render={(() => <Home />)} />
                    <Route path="/admin" exact render={(() => <Admin />)} />
                </div>
                <div className="minSite"></div>
           <Footer />
        </div>
    )
}

export default Site
