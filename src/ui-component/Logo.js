// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/l3.png';
// eslint-disable-next-line no-unused-vars
import { Stack, Typography } from '@mui/material';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    // eslint-disable-next-line no-unused-vars
    const theme = useTheme();

    return (
        <Stack direction="row" justifyContent="center" alignItems="center">
            <img src={logo} alt="Berry" width="30" height="30" />
            <Typography variant="h2" ml={2} sx={{ color: '#00a499' }}>
                Nabh DLM
            </Typography>
        </Stack>
    );
};

export default Logo;
