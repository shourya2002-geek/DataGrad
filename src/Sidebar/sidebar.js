import React from "react";
import { slide as Menu } from "react-burger-menu";
import './sidebar.scss';
import HomeIcon from '@material-ui/icons/Home';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import CloseIcon from '@material-ui/icons/Close';

const Sidebar = () => {



  return (

    <Menu>
      
      <a className="menu-item" href="/">
        <HomeIcon className="svg_icons" />
        <span>Home</span>
      </a>

      <a className="menu-item" href="/questions">
      <LibraryBooksIcon className="svg_icons" />
        <span>Want a Course?</span>
      </a>

      <a className="menu-item" href="/medium">
      < DescriptionIcon className="svg_icons" />
        <span>Want some cool articles?</span>
      </a>

      <a className="menu-item" href="/contact">
      <ContactMailIcon className="svg_icons" />
        <span>Contact us</span>
      </a>
    </Menu>
  );
};

export default Sidebar;
