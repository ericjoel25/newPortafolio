import React from "react";
import {backgroundStyle} from '../utils/styles'; 

export function Background() {
    
    return (
        <main className={backgroundStyle.container}>
            <div className={backgroundStyle.galaxy}>
                <div className={backgroundStyle.stars1}></div>
                <div className={backgroundStyle.stars2}></div>
                <div className={backgroundStyle.stars3}></div>
            </div>

        </main>
    )
}