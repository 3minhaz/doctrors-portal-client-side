import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png';
import { Container } from '@mui/material';

const services = [
    {
        name: 'Fluride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error cumque sequi beatae consequatur veritatis excepturi nulla voluptas impedit. Quas autem repudiandae quia, recusandae perspiciatis rerum tempora enim quis aperiam!',
        img: fluoride
    },
    {
        name: 'Cavity filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error cumque sequi beatae consequatur veritatis excepturi nulla voluptas impedit. Quas autem repudiandae quia, recusandae perspiciatis rerum tempora enim quis aperiam!',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet error cumque sequi beatae consequatur veritatis excepturi nulla voluptas impedit. Quas autem repudiandae quia, recusandae perspiciatis rerum tempora enim quis aperiam!',
        img: whitening
    },
]


// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'primary.main', m: 2 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h4" component="div">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {services.map((service, index) => (
                        <Grid
                            item xs={2} sm={4} md={4} key={index}>
                            <Service
                                key={service.name}
                                service={service}
                            ></Service>
                        </Grid>
                    ))
                    }
                </Grid >
            </Container>
        </Box >
    );
};

export default Services;