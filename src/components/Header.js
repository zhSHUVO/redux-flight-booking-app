import React from "react";
import lws_logo from "../images/lws-logo.svg";

export const Header = () => {
    return (
        <div>
            <header id="header">
                <div className="container">
                    <img src={lws_logo} alt="logo" className="logo" />
                    <div className="flex items-center">
                        <a
                            className="text-white min-w-[50px] font-medium"
                            href="#"
                        >
                            Home
                        </a>
                        <button className="log-btn btn">Login</button>
                    </div>
                </div>
            </header>
        </div>
    );
};
