import React from 'react';
import {Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

import useStyles from './styles';

const NewsCard = ({article: { description, publishedAt, source, title, url, urlToImage }, i}) => {
return (
    <Card>
        <CardActionArea>
            <CardMedia img={urlToImage || 'https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png'} />
            <div>
                <Typography varient="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                <Typography varient="body2" color="textSecondary" component="h2">{source.name}</Typography>
            </div>
            <Typography gutterBottom varient="h5">{title}</Typography>
            <CardContent>
                <Typography varient ="body2" color="textSecondary" component="p">{description}</Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size='small' color='primary'>Learn More</Button>
            <Typography varient ="h5" color="textSecondary" >{i + 1}</Typography>
        </CardActions>
    </Card>
);
}

export default NewsCard;