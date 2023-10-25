import React, { useState } from 'react';
import Arrow from '../../assets/arrow_drop_down.png'
import classes from './NewDropDown.module.css'

function NewDropDown({ options, defaultOption, onSelect }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        onSelect(option);
        toggleDropdown();
    };
    
    return (
        <div className={classes.CustomDropdown}>
            <div className={classes.DropdownHeader} onClick={toggleDropdown}>
                <p className={classes.DDtext}>{defaultOption}</p>
                <img className={classes.DropdownArrow} src={Arrow} alt="Dropdown Arrow" />
            </div>
            {isOpen && (
                <div className={classes.DropdownContent}>
                    {options.map((option) => (
                        <div
                            className={classes.OptionText}
                            onClick={() => handleOptionClick(option)}
                            key={option}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default NewDropDown
