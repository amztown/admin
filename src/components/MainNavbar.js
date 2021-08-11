import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../assets/Logo.png';

const MainNavbar = props => (
  <AppBar elevation={0} {...props}>
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        <img
          className="img-fluid"
          style={{ height: '50px', marginLeft: '-25px' }}
          src={Logo}
        />
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
