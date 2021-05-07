import React from 'react';
import './group.scss';
import { Group } from '../../../interfaces/action.interface';

const GroupBox: React.FC<Group> = (props) => {
  return (
    <div className='group-box'>
      <div className='group-title '>{props.title}</div>
      <div className='d-flex' style={{ padding: '0 7px' }}>
        {props.children}
      </div>
    </div>
  );
};

export default GroupBox;
