import PropTypes from 'prop-types';

// material-ui
import { styled, useTheme } from '@mui/material/styles';
import { CardContent, Card, Typography } from '@mui/material';

// ==============================|| DASHBOARD - TOTAL INCOME DARK CARD ||============================== //
const CardWrapper = styled(Card)(({ theme }) => ({
    backgroundColor: '#2f2f31',
    color: '#fff',
    border: '1px solid #89888a',
    overflow: 'hidden',
    position: 'relative'
}));

const DescriptionCard = ({ description }) => {
    const theme = useTheme();

    return (
        <CardWrapper>
            <CardContent>
                <Typography sx={{ fontSize: 24 }} gutterBottom>
                    Description
                </Typography>
                <Typography sx={{ mb: 1 }}>{description}</Typography>
            </CardContent>
        </CardWrapper>
    );
};

DescriptionCard.propTypes = {
    description: PropTypes.string
};

export default DescriptionCard;
