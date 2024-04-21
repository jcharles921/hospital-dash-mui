import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';
import Logo from './Logo';


interface LogoSectionProps {
  sx?: React.CSSProperties;
  to?: string;
  defaultId: string;
  setActiveItem: (id: string) => void;
}

const LogoSection: React.FC<LogoSectionProps> = ({ sx, to, defaultId, setActiveItem }) => {
  return (
    <ButtonBase
      disableRipple
      component={Link}
      onClick={() => setActiveItem(defaultId)}
      to={{ pathname: to }}
      sx={sx}
    >
      <Logo />
    </ButtonBase>
  );
};

LogoSection.propTypes = {
  sx: PropTypes.object,
  to: PropTypes.string,
  defaultId: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired
};

export default LogoSection;
