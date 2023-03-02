import React, { useEffect, useState } from "react";

import "./App.css";


const Dark = () => {


    let getTheme = () => {
        return JSON.parse(localStorage.getItem("theme"));
    }
    const [theme, SetTheme] = useState(getTheme());
    const [change, Setchange] = useState("DarkMode")

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", JSON.stringify(theme))
    }, [theme])


    const Change = () => {
        theme === "dark-theme" ? SetTheme("light-theme") : SetTheme("dark-theme")
        change === "LightMode" ? Setchange("DarkMode") : Setchange("LightMode");

    };

    const Refresh = (event) => {
        event.preventDefault();
        window.location.reload();
    }


    return (
        <div>
            <div>
                <button className=" btn btn-color  btn-sm  w-40 m-2 " onClick={Change} >{change}</button>
                <button className="btn btn-color btn-sm w-30 m-3 " onClick={Refresh} >Refresh</button>
            </div>
        </div>
    );
};

export default Dark;