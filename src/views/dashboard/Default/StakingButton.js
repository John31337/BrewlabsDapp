import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { Card, Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography, ListItemButton } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import CancelIcon from '@mui/icons-material/Cancel';

// Iconsmui
import CloseCircleIcon from '../../../assets/images/icons/closecircle.svg';
import CheckCirclIcon from '../../../assets/images/icons/checkcircle-yellow.svg';
import ExternalLinkInvalidIcon from '../../../assets/images/icons/externallink-invalid.svg';
import ExternalLinkvalidIcon from '../../../assets/images/icons/externallink-valid.svg';

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //
const CardWrapper = styled(Card)(({ theme }) => ({
    backgroundColor: '#2f2f31',
    color: '#fff',
    border: '1px solid #89888a',
    overflow: 'hidden',
    position: 'relative'
}));

const StakingButton = ({ available }) => {
    const theme = useTheme();

    return (
        <CardWrapper border={false} content={false}>
            <Box sx={{ p: 2 }}>
                <List sx={{ py: 0 }}>
                    <ListItem alignItems="center" disableGutters sx={{ py: 0 }}>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    backgroundColor: 'transparent',
                                    width: '3em',
                                    height: '3em',
                                    color: available ? '#eebb19' : '#3f3f46'
                                }}
                            >
                                <CancelIcon
                                    sx={{
                                        width: '2.5em',
                                        height: '2.5em'
                                    }}
                                    fontSize="inherit"
                                />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            sx={{
                                py: 0,
                                mt: 0.45,
                                mb: 0.45
                            }}
                            primary={
                                <Typography variant="h3" sx={{ color: '#fff' }}>
                                    Staking Available
                                </Typography>
                            }
                        />
                        <ListItemButton
                            sx={{
                                backgroundColor: '#eebb19',
                                borderRadius: '4em',
                                width: '3em',
                                height: '2em',
                                fontSize: '1em',
                                fontWeight: '800',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            +Deploy
                        </ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    backgroundColor: 'transparent',
                                    width: '3em',
                                    height: '3em',
                                    color: available ? '#eebb19' : '#3f3f46'
                                }}
                            >
                                <LaunchIcon
                                    sx={{
                                        width: '2.5em',
                                        height: '2.5em'
                                    }}
                                    fontSize="inherit"
                                />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItem>
                </List>
            </Box>
        </CardWrapper>
    );
};

StakingButton.propTypes = {
    available: PropTypes.bool
};

export default StakingButton;
