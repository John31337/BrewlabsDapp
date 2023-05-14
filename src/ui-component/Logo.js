// material-ui
import { useTheme } from '@mui/material/styles';
import logoDark from 'assets/images/logo-dark.png';

const Logo = () => {
    const theme = useTheme();
    return <img src={logoDark} alt="Brewlabs" width="150" />;
};

export default Logo;
