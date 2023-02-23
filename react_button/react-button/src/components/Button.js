import React, { useState } from 'react';
import classes from './Button.module.css';

const Button = () => {
    const [title, setTitle] = useState();


    const clickHandler = () => {
        setTitle('You Clicked Me!')
        console.log(title);
    };


    return (
        <div>
            <p className={classes.text}>Click This Button Please!</p>
            <button className={classes.button} onClick={clickHandler}>{title}</button>
        </div>
    );
};

export default Button;