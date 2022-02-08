import { Container, Grid, Slide } from "@mui/material"
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import styles from './services.module.scss';
import { useRef } from "react";
import useOnScreen from "src/hooks/useOnScreen";

let isAnimate = false;

export const Services = (props: any) => {

  const ref = useRef();
  const isVisible = useOnScreen(ref);
  isAnimate = isVisible ? true : isAnimate;

  return (
    <div className={styles.services}>
      <Container>
        <div className={styles.sectionTitle + ' section-title'}>
          <h2>خدمات ما</h2>
          <p>
            واردات، صادرات ، حمل و نقل و ترخیص کالا از کلیه گمرکات کشور
          </p>
        </div>
        <Grid
          ref={ref as any}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {/* <div className='row'> */}
          {props.data
            ? props.data.map((d: any, i: number) => (

              <Slide key={`${d.title}-${i}`} mountOnEnter unmountOnExit direction="right" in={isAnimate} timeout={i * 150 + 700} >
                <Grid key={`${d.name}-${i}`} item xs={12} md={4}>
                  <div>
                    {' '}
                    {
                      {
                        'fa fa-wordpress': <CloudDoneIcon />,
                        'fa fa-cart-arrow-down': <FileUploadIcon />,
                        'fa fa-cloud-download': <FileDownloadIcon />,
                        //'fa fa-magic': <AutoFixHighIcon />,
                      }[d.icon as string]
                    }
                    {/* <i className={d.icon}></i> */}
                    <div className={styles.serviceDesc}>
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                </Grid>
              </Slide>
            ))
            : 'loading'}
          {/* </div> */}
        </Grid>

      </Container>
    </div>
  )
}
