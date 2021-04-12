import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './../../logo.svg';
import Footer from '../footer';
import { isEmpty } from 'lodash';
import Spinner from '../spinner';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 170,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  const [url, setUrl] = useState('');

  useEffect(() => {
    chrome.storage.sync.get(['currentUrl'], ({ currentUrl }) => {
        console.log('Value currently is ' + currentUrl);
        setUrl(currentUrl);
    });
});

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="TV + Remote"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Example cra Extension!
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          This simple Example-App shows your current Url and puts it into the storage.
          </Typography>
          <br/>
          {
                isEmpty(url) ?
                    <Spinner /> : <Typography variant="body2" gutterBottom>Your current Url: {url}</Typography>
            }
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Footer
      createdText={'Link erstellt von'}
      linkCreated={'https://www.freepik.com'}
      createdtitle={'Freepik'}
      linkFrom={'https://www.flaticon.com/de/'}
      fromTitle={'Flaticon'}
      />
      </CardActions>
    </Card>
  );
}
