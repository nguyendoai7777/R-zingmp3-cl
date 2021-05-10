import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../constants';
import { Button } from '@material-ui/core';
import './sidebar-nav-item.scss';

const SidebarNavItem: React.FC<NavItem> = ({ iconName, textContent, url }) => {

  return (
    <div className='nav-wrapper'>
      <NavLink to={url} exact activeClassName='activated-route'>
        <Button className={`nav-item `}>
          <svg className='nav-icon'>
            <use xlinkHref={'#' + iconName} />
          </svg>
          <span className='large-side'>{textContent}</span>
        </Button>
      </NavLink>
    </div>
  );
};

export default SidebarNavItem;
