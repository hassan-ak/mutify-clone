// Imports
// React Imports
import React from 'react';
// Material UI Imports
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
// Web animations Imports
import useWebAnimations, {zoomIn} from "@wellyshen/use-web-animations";
// Images Imports
import mutifyLogo1  from "../images/mutify-logo-6ab64e5ad7.png";
// Styles Imports
import '../App.css';
// Value for menu button
const options = [
    'Works With',
    'Noise Level',
    'Switch Device',
    'Feedback',
    'Privacy Policy',
  ];
  const ITEM_HEIGHT = 48;
// Header function Export
export const Header = () => {
    // For Menu Bar
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    // Open on click
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    //Close on Click
    const handleClose = () => {
        setAnchorEl(null);
    };
    // useWebAnimations
    const { ref } = useWebAnimations({...zoomIn})
    return (
        <div>
            <header className="header" id="header">
                <div className="header__inner container">
                    <nav className="main-nav">
                        <div className="main-nav__inner">
                            <div ref = {ref} className="main-nav__logo">
                                <img src={mutifyLogo1} alt="Mutify"/>
                                <span>Mutify</span>
                            </div>
                            <ul className="main-nav__menu">
                                <li><a href="#header">Works With</a></li>
                                <li><a href="#header">Noise Level</a></li>
                                <li><a href="#header">Switch Device</a></li>
                                <li><a href="#header">Feedback</a></li>
                            </ul>
                            <a className="button button_small main-nav__button download-button" href="#header">Download</a>
                            <div className="main-nav__burger1">
                                <IconButton aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
                                    <MenuIcon fontSize="large" />
                                </IconButton>
                                <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose} PaperProps={{style: {maxHeight: ITEM_HEIGHT * 4.5,width: '20ch',},}}>
                                    {options.map((option) => (
                                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    )
}