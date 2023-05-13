import { useEffect, useState } from 'react';

// material-ui
import { Grid, Box } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import Select, { components } from 'react-select';
import TradingViewWidget from './TradingViewWidget';

// project imports
import EarningCard from './EarningCard';
import PopularCard from './PopularCard';
import TotalOrderLineChartCard from './TotalOrderLineChartCard';
import TotalIncomeDarkCard from './TotalIncomeDarkCard';
import TotalIncomeLightCard from './TotalIncomeLightCard';
import TotalGrowthBarChart from './TotalGrowthBarChart';
import { gridSpacing } from 'store/constant';

import MgIcon from '../../../assets/images/icons/earning.svg';
import UeIcon from '../../../assets/images/icons/social-google.svg';
import DropDownIcon from '../../../assets/images/icons/dropdown.svg';
import StarIcon from '../../../assets/images/icons/star.svg';
import CircleIcon from '../../../assets/images/icons/circle.svg';
import LikeIcon from '../../../assets/images/icons/like.svg';
import DislikeIcon from '../../../assets/images/icons/dislike.svg';

import DBIcon from '../../../assets/images/icons/db.svg';
import ChartBarIcon from '../../../assets/images/icons/chartbar.svg';
import TagIcon from '../../../assets/images/icons/tag.svg';
import GraphIcon from '../../../assets/images/icons/graph.svg';
import TrendingUpIcon from '../../../assets/images/icons/trendingup.svg';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const currencies = [
    { value: 'MG', label: 'BNB', price: '234.2', icon: MgIcon },
    { value: 'UE', label: 'ETH', price: '129.5', icon: UeIcon }
];

const Option = (props) => (
    <components.Option {...props}>
        <div style={{ display: 'flex', color: 'white', alignItems: 'center' }}>
            <img src={props.data.icon} alt="logo" />
            <div style={{ color: 'white', marginLeft: '3px' }}>
                <p>{props.data.label}</p>
            </div>
        </div>
    </components.Option>
);

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState(currencies[0]);

    const handleChange = (value) => {
        setSelectedCountry(value);
    };

    useEffect(() => {
        setLoading(false);
    }, []);

    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                <img src={selectedCountry.icon} alt="s-logo" className="selected-logo" />
                <div style={{ color: 'white', marginLeft: '3px' }}>{children}</div>
            </div>
        </components.SingleValue>
    );

    const DropdownIndicator = ({ ...props }) => (
        <components.DropdownIndicator {...props}>
            <img src={DropDownIcon} alt="s-logo" className="selected-logo" />
        </components.DropdownIndicator>
    );

    return (
        <Grid container spacing={gridSpacing}>
            <Grid container xs={12} margin={gridSpacing}>
                <Grid item xs={12} md={2} display={'flex'} alignItems={'center'}>
                    <Box display={'flex'} flexDirection={'column'} pr={3}>
                        <MuiTypography variant="h2" display={'flex'} justifyContent={'right'}>
                            BrewChart
                        </MuiTypography>
                        <MuiTypography variant="caption" display="flex" justifyContent={'right'}>
                            version: 1.0.0
                        </MuiTypography>
                    </Box>
                    <Select
                        value={selectedCountry}
                        options={currencies}
                        onChange={handleChange}
                        styles={{
                            singleValue: (base) => ({
                                ...base,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#28282b'
                            })
                        }}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: gridSpacing,
                            colors: {
                                ...theme.colors,
                                primary: '#28282b',
                                primary25: '#202938',
                                neutral0: '#28282b'
                            }
                        })}
                        components={{
                            Option,
                            SingleValue,
                            DropdownIndicator
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6} alignItems={'center'} padding={2}>
                    <Select
                        value={selectedCountry}
                        options={currencies}
                        onChange={handleChange}
                        styles={{
                            singleValue: (base) => ({
                                ...base,
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#28282b'
                            })
                        }}
                        theme={(theme) => ({
                            ...theme,
                            borderRadius: gridSpacing,
                            colors: {
                                ...theme.colors,
                                primary: '#28282b',
                                primary25: '#202938',
                                neutral0: '#28282b'
                            }
                        })}
                        components={{
                            Option,
                            SingleValue,
                            DropdownIndicator
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={4} alignItems={'center'} padding={1}>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <MuiTypography variant="caption" display="flex" justifyContent={'right'}>
                                    version: 1.0.0
                                </MuiTypography>
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                Test
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container xs={12}>
                <Grid item xs={12} md={9} display={'flex'} alignItems={'center'} alignContent={'center'} padding={gridSpacing}>
                    <Box display={'flex'}>
                        <img src={StarIcon} alt={'star'} />
                        <img src={CircleIcon} alt={'favorite'} />
                        <img src={CircleIcon} alt={'favorite'} />
                        <img src={CircleIcon} alt={'favorite'} />
                        <MuiTypography variant="h2" display={'flex'} justifyContent={'right'} color={'white'}>
                            BREWLABS-WBNB
                        </MuiTypography>
                        <Box display={'flex'} ml={2}>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={LikeIcon} alt={'like'} />
                                <MuiTypography variant="caption" display="flex" justifyContent={'right'} pr={2} pl={1}>
                                    45
                                </MuiTypography>
                            </Box>
                            <Box display={'flex'} alignItems={'center'}>
                                <img src={DislikeIcon} alt={'dislike'} />
                                <MuiTypography variant="caption" display="flex" justifyContent={'right'} pr={2} pl={1}>
                                    25
                                </MuiTypography>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'}>
                        <Box display={'flex'} p={2}>
                            <img src={DBIcon} alt={'db'} />
                            <MuiTypography variant="caption" display="flex" justifyContent={'right'} color={'white'}>
                                273.82k Pool liquidity
                            </MuiTypography>
                        </Box>
                        <Box display={'flex'} p={2}>
                            <img src={ChartBarIcon} alt={'marketcap'} />
                            <MuiTypography variant="caption" display="flex" justifyContent={'right'} color={'white'}>
                                $493,023 Marketcap
                            </MuiTypography>
                        </Box>
                        <Box display={'flex'} p={2}>
                            <img src={TagIcon} alt={'holders'} />
                            <MuiTypography variant="caption" display="flex" justifyContent={'right'} color={'white'}>
                                $385 Holders
                            </MuiTypography>
                        </Box>
                        <Box display={'flex'} p={2}>
                            <img src={GraphIcon} alt={'volume'} />
                            <MuiTypography variant="caption" display="flex" justifyContent={'right'} color={'white'}>
                                $59.29k Volumes(24h)
                            </MuiTypography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3} display={'flex'} alignItems={'center'} justifyContent={'center'} padding={gridSpacing}>
                    <Box display={'flex'} alignItems={'center'}>
                        <MuiTypography variant="caption" display="flex" justifyContent={'right'} color={'green'}>
                            +2.23%(24h)
                        </MuiTypography>
                        <MuiTypography variant="h3" display="flex" justifyContent={'right'} color={'white'} pl={3}>
                            $0.02
                        </MuiTypography>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={3} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <PopularCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeDarkCard isLoading={isLoading} />
                            </Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}>
                                <TotalIncomeLightCard isLoading={isLoading} />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={9} md={6} sm={6} xs={12}>
                        <TradingViewWidget />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
