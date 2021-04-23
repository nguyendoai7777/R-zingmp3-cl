import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../constants';
import { Button } from '@material-ui/core';
import './sidebar-nav-item.scss';

const SidebarNavItem: React.FC<NavItem> = ({ textContent, url }) => {

  return (
    <div className='nav'>
      <NavLink to={url} exact activeClassName='activated-route'>
        <Button className={`nav-item`}>
          {textContent}
        </Button>
      </NavLink>
    </div>
  );
};

export default SidebarNavItem;
