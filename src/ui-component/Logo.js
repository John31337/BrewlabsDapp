// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //
import logoDark from 'assets/images/logo-dark.png';
const Logo = () => {
    const theme = useTheme();

    return <img src={logoDark} alt="Berry" width="150" />;
};

export default Logo;
