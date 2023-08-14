import React, { useState } from "react";
import styles from "./home.module.css";
import { Switch } from "@nextui-org/react";
import { sun } from "../../assets";
import { moon } from "../../assets";


export const Home = () => {
    const [modoClaro, setModoClaro] = useState(true);
    const toggleModo = () => {
        setModoClaro((prevState) => !prevState);
    };

    return (
        <div
            className={`${styles.app} ${modoClaro ? styles.modoClaro : styles.modoOscuro
                }`}
        >
            <Switch
            className={styles.modos}
                defaultSelected
                size="lg"
                color="success"
                startContent={<p>☀</p>}
                endContent={<p>🌙</p>}
                onClick={toggleModo}
            >
                <p className={styles.switch}></p>
            </Switch>
            <h1 className={styles.title}>Template Front</h1>





        </div>
    );
};
