"use client";

import styles from './ReusableButton.module.scss';

interface Props {
    title: string;
    onClick?: () => void;
    buttonColor?: 'grayButton' | 'blueButton';
    borderRadius?: number;
}

const ReusableButton = ({ 
        title, 
        onClick, 
        buttonColor = 'blueButton', 
        borderRadius = 12 
    }: Props) => {
    return (
        <div 
            className={`${styles.wrapper} ${styles[buttonColor]}`}
            onClick={onClick}
            style={{borderRadius: `${borderRadius}px`,}}
        >
            {title}
        </div>
    );
}

export default ReusableButton;
