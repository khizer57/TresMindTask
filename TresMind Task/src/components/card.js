import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ellipse1 from '../images/ellipse1.png'
import ellipse2 from '../images/ellipse2.png'
import ellipse3 from '../images/ellipse3.png'



export default function ActionAreaCard() {
  return (
    <>
    <div className="cardbox">
    <Card sx={{ maxWidth: 150,maxHeight: 200, p: 6, m: 3}}>
          <CardActionArea>
              <CardMedia
                  component="img"
                  height=""
                  image={ellipse1}
                  alt="green iguana" />
              <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  Pick any brand/offer that you wish to use
                  </Typography>
              </CardContent>
          </CardActionArea>
      </Card><Card sx={{ maxWidth: 150,maxHeight: 200, p: 6, m: 3}}>
              <CardActionArea>
                  <CardMedia
                      component="img"
                      height=""
                      image={ellipse2}
                      alt="green iguana" />
                  <CardContent>
                      <Typography variant="body2" color="text.secondary">
                      Show it to the vendor to utilize the offer
                      </Typography>
                  </CardContent>
              </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 150,maxHeight: 200, p: 6, m: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height=""
          image={ellipse3}
          alt="green iguana"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Enjoy huge savings on all the things that you
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </>
  );
}
