import React from 'react';
import { Box } from '@material-ui/core';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ index, value, children }) => {
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box p={2}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
};

export default TabPanel;
