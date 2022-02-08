import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './main-pages.css';
//import im from '../../public/img/about.jpg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import { fetchChildPages, fetchPage } from 'src/services/http/page-api';

export const MainPages = ({ pageId, parentId }: any) => {

  //let { id: pageId } = useParams();

  const [pages, setPages] = useState(null as any);
  //const [img, setImg] = useState('');

  const baseUrl = (window as any).baseUrlApi;

  //const mainPagesUrl = `${baseUrl}wp/v2/pages?slug=main-page-content`;//parent=9

  useEffect(() => {
    //Runs on every render

    //pageId = pageId ? pageId : props.pageId;

    if (pageId) {
      fetchPage(pageId)
        .then((pst) => {
          setPages([pst]);
        });

      return;
    }

    fetchChildPages(parentId)
      .then((pst) => {
        setPages(pst);
      });

    // async function getChPages() {
    //   try {
    //     const user = await fetchChildPages(parentId);
    //     setPages(user);
    //   } catch(error) {
    //      //Log errors
    //     }
    // }
    // getChPages();


    // import { useAxios } from "use-axios-client";
    // export default function App() {
    //   const { data, error, loading } = useAxios({
    //     url: "https://jsonplaceholder.typicode.com/posts/1"
    //   });
    //   if (loading || !data) return "Loading...";
    //   if (error) return "Error!";
    //   return (
    //     <div>
    //       <h1>{data.title}</h1>
    //       <p>{data.body}</p>
    //     </div>
    //   )
    // }


    // axios.get(`${baseUrl}wp/v2/pages${pageId ? '/' + pageId + '?' : '?parent=' + parentId + '&'}_fields[]=id&_fields[]=title&_fields[]=parent&_fields[]=content&_fields[]=status&_fields[]=type&_fields[]=images&_fields[]=menu_order`)
    //   .then((pst) => {

    //     if (pageId) {
    //       setPages([pst.data]);
    //       return;
    //     }

    //     setPages(pst.data);

    //     //console.log(pst.data.featured_media, pst.data.featured_media > 0);
    //     // if (pst.data.featured_media > 0) {
    //     //   axios.get(`${baseUrl}wp/v2/media/${pst.data.featured_media}?_fields[]=id&_fields[]=source_url`)
    //     //     .then((im) => {
    //     //       setImg(im.data.source_url);
    //     //       console.log(im.data.source_url);
    //     //     })
    //     // }


    //     //wp/v2/media/72?id&source_url
    //     //console.log(post);

    //     //structedData(categories, posts);
    //   });

  }, []);


  const skeleton = () => {

    if (pages || parentId) return null;

    return (
      <Box sx={{}}>
        <Skeleton variant="rectangular" width={'100%'} height={'40vh'} />
        <Skeleton width={'30%'} sx={{ margin: 'auto' }} />
        <Divider></Divider>
        <br></br>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    )
  };


  return (

    <div id='main-pages'>

      {pages &&
        pages.map((page: any) => (

          <Container fixed key={page.id} >

            <Box sx={{ mt: 10, mb: 10, padding: 4 }}> {/*maxWidth: 345 */}

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
              {/*<br></br>*/}

              <div className='post-content-div' dangerouslySetInnerHTML={{ __html: page?.content?.rendered }} />

            </Box>

          </Container >
        ))
      }
      {skeleton()}

    </div>

  )
}
