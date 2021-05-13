import React from 'react';
import { Box } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  scroll?: boolean;
}

const TabPanel: React.FC<TabPanelProps> = ({ index, value, children, scroll = true }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box>
          {scroll ? <div className='app-scroll right-sidebar-box'>{children}</div> : <div>{children}</div>}
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
