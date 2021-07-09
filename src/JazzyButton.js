import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './JazzyButton.css';

const JazzyButton = (props) => {
    const addClick = () => {
        props.onClickCallBack(props.id);
    };

    useEffect(
        () => {
            console.log(`useEffect Callback funct called.`)
        },
        [props.mode, props.food]
    )
    return (
        <button className={props.mode} onClick={addClick}>
            <div>Toggle to {props.mode}</div>
        </button>
    );
}

JazzyButton.propTypes = {
    onClickCallBack: PropTypes.func.isRequired,
    mode: PropTypes.string.isRequired,
};

export default  JazzyButton;