import React from 'react';
import { Box } from '@mui/material';
import logo from '../logos/FULL_LOGO_WHITE.png';

const Banner = ({ height }) => {
    const logoHeight = `${parseInt(height) * 2/3}px`; // Adjusting logo height to be proportional to banner height

    return (
        <Box
            sx={{
                width: '100%',
                height: height,
                backgroundColor: '#47b99b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 4,
            }}
        >
            <img src={logo} alt="Logo" style={{ height: logoHeight }} />
        </Box>
    );
};

Banner.defaultProps = {
    height: '150px', // Default height
};

export default Banner;