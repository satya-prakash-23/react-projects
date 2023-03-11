import { Box, Button } from '@mui/material'
import PropTypes from "prop-types";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export const NavMenuItem = (props) => {
  return (
    <Box>
        <Button 
        variant="contained"
        disableElevation
        startIcon={props.displayIcon}
        endIcon={<KeyboardArrowDownIcon />}
        >
            {props.displayName}
        </Button>
    </Box>
  )
}

NavMenuItem.propTypes = {
    displayIcon: PropTypes.element
};
