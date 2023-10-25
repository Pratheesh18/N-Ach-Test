import React from "react";
import Footer from "./Footer";

const AppLayout = ({children}) => {
    return(
        <div>
            <div> {children} </div>
            <Footer />
        </div>
    )
};

export default AppLayout;