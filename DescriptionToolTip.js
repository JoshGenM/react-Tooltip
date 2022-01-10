import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function BasicTooltip() {
  return (
    <Tooltip arrow title="Delete icon">
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
  );
}
