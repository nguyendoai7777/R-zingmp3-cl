import React from 'react';
import { makeStyles, Tooltip, TooltipProps } from '@material-ui/core';
const useCustomTooltipStyle = makeStyles((_) => ({
  arrow: {
    color: '#1d1d1d',
  },
  tooltip: {
    backgroundColor: '#1d1d1d',
    padding: '7px 12px',
    fontSize: '14px'
  }
}));
const MyTooltip = (props: TooltipProps) => {
  const classes = useCustomTooltipStyle();
  return (
    <Tooltip arrow classes={classes} {...props} />
  );
};

export default MyTooltip;
