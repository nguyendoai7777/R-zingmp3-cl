import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from '../constants';
import { Button } from '@material-ui/core';
import './sidebar-nav-item.scss';

const SidebarNavItem: React.FC<NavItem> = ({ iconName, textContent, url , onClick}) => {

  return (
    <div className='nav-wrapper' onClick={onClick}>
      <NavLink to={url} exact activeClassName='activated-route'>
        <Button className={`nav-item `}>
          <svg className='nav-icon'>
            <use xlinkHref={'#' + iconName} />
          </svg>
          <span className='content no-wrap'>{textContent}</span>
        </Button>
      </NavLink>
    </div>
  );
};

export default SidebarNavItem;
