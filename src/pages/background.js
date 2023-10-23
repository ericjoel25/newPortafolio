import React from "react";
import BackgroundStyle from '../components/styles/background.module.css';

export function Background() {
    return (
        <main className={BackgroundStyle.container}>
            <div className={BackgroundStyle.galaxy}>
                <div className={BackgroundStyle.stars1}></div>
                <div className={BackgroundStyle.stars2}></div>
                <div className={BackgroundStyle.stars3}></div>
            </div>

        </main>
    )
}