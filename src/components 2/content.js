import React from "react";

import Navbar from "./navbar";
import Scroll from "./scroll";
import Sidebar from "./sidebar";




function Content(){
    return(
        <>
        <Navbar/>
        
        <div >
        <Sidebar />
              
              <Scroll />
        </div>
        
        </>
    );
}

export default Content;