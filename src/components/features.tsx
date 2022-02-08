import { Container, Grid, Slide, Stack, useScrollTrigger } from "@mui/material"
import { grid } from "@mui/system"
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import CampaignIcon from '@mui/icons-material/Campaign';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

// import './features.css';
import styles from './features.module.scss';
import { useEffect, useRef, useState } from "react";
import useOnScreen from "src/hooks/useOnScreen";
//const styles = require('./features.module.scss');

let isAnimate = false;

export const Features = (props: any) => {

  // const {window} = props;
  // const trigger = useScrollTrigger({target: window ? window() : undefined});

  const ref = useRef();
  const isVisible = useOnScreen(ref);
  isAnimate = isVisible ? true : isAnimate;

  return (
    <div id='features' className={styles.features} >
      <Container>
        {/* <div className='container'> 
        <div className='col-md-10 col-md-offset-1 section-title'>*/}
        <Grid
          className='section-title'
          container
          //direction="row-reverse"
          justifyContent="center"
          alignItems="center"
        >
          <h2>امکانات</h2>
        </Grid>

        {/* </div> 
        <div className='row'>*/}

        <Grid
          ref={ref as any} 
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {props.data
            ? props.data.map((d: any, i: number) => (
              <Slide key={`${d.title}-${i}`} mountOnEnter unmountOnExit direction="left" in={isAnimate}  timeout={i*150+700} >


                <Grid item xs={6} md={3}>
                  <div key={`${d.title}-${i}`} >
                    {' '}
                    {
                      {
                        'fa fa-comments-o': <ForumOutlinedIcon />,
                        'fa fa-bullhorn': <CampaignIcon />,
                        'fa fa-group': <GroupsIcon />,
                        'fa fa-magic': <AutoFixHighIcon />,
                      }[d.icon as string]
                    }

                    {/* <i className={d.icon}></i> */}
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                </Grid>

              </Slide>

            ))
            : 'Loading...'}
        </Grid>


        {/*</div>
         </div> */}
      </Container>
    </div>
  )
}