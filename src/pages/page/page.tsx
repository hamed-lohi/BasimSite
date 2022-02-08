import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './page.css';
//import im from '../../public/img/about.jpg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Skeleton } from '@mui/material';

export const Page = (props: any) => {

  let { id: pageId } = useParams();

  const [page, setPage] = useState(null as any);
  //const [img, setImg] = useState('');

  const baseUrl = (window as any).baseUrlApi;

  useEffect(() => {
    //Runs on every render

    setPage(null);
    pageId = pageId ? pageId : props.pageId;
    axios.get(`${baseUrl}wp/v2/pages/${pageId}?_fields[]=id&_fields[]=title&_fields[]=parent&_fields[]=content&_fields[]=status&_fields[]=type&_fields[]=images&_fields[]=menu_order`)
      .then((pst) => {

        setPage(pst.data);

        //console.log(pst.data.featured_media, pst.data.featured_media > 0);
        // if (pst.data.featured_media > 0) {
        //   axios.get(`${baseUrl}wp/v2/media/${pst.data.featured_media}?_fields[]=id&_fields[]=source_url`)
        //     .then((im) => {
        //       setImg(im.data.source_url);
        //       console.log(im.data.source_url);
        //     })
        // }


        //wp/v2/media/72?id&source_url
        //console.log(post);

        //structedData(categories, posts);
      });

  }, [pageId, props.pageId]);


  const skeleton = () => {

    if (page) return null;

    return(
    <Box sx={{}}>
      <Skeleton variant="rectangular" width={'100%'} height={'50vh'} />
      <Skeleton width={'30%'} sx={{ margin: 'auto' }} />
      <Divider></Divider>
      <br></br>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton width="60%" />
    </Box>
    );
  };


  return (

    < Container fixed>

      <Card sx={{ mt: 9, mb: 9, padding: 4 }}> {/*maxWidth: 345 */}

        {page &&
            <>
              <header style={{ textAlign: 'center' }} >
                {page?.images?.large &&
                  <CardMedia
                    component="img"
                    //height="340" //140
                    image={page?.images?.large}//"/static/images/cards/contemplative-reptile.jpg"
                    alt="green iguana"
                    sx={{ maxWidth: '100%', borderRadius: 6 }}
                  />
                }
                <h1>{page?.title?.rendered}</h1>
              </header>

              <Divider></Divider>
              <br></br>

              <div className='post-content-div' dangerouslySetInnerHTML={{ __html: page?.content?.rendered }} />
            </>
          }
          {skeleton()}

      </Card>

    </Container >

  )
}

export default Page;