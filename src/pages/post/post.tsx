import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './post.css';
//import im from '../../public/img/about.jpg';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Skeleton, Zoom } from '@mui/material';

export const Post = (props: any) => {

  let { id: postId } = useParams();

  const [post, setPost] = useState(null as any);
  //const [img, setImg] = useState('');

  const baseUrl = (window as any).baseUrlApi;

  useEffect(() => {
    //Runs on every render

    setPost(null);

    axios.get(`${baseUrl}wp/v2/posts/${postId}?_fields[]=id&_fields[]=title&_fields[]=categories&_fields[]=content&_fields[]=status&_fields[]=type&_fields[]=tags&_fields[]=images`)
      .then((pst) => {

        setPost(pst.data);

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

  }, [postId]);


  const skeleton = () => {

    if (post) return null;

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

      <Card sx={{ mt: 10, mb: 10, padding: 4 }}> {/*maxWidth: 345 */}

        {post &&
            <>
              <Zoom
                key={154}
                in={true}
                timeout={1000}
                style={{
                  transitionDelay: `${500}ms`,
                }}
                unmountOnExit
              >
                <header style={{ textAlign: 'center' }} >
                  {post?.images?.large &&
                    <CardMedia
                      component="img"
                      //height="340" //140
                      image={post?.images?.large}//"/static/images/cards/contemplative-reptile.jpg"
                      alt="green iguana"
                      sx={{ maxWidth: '100%', borderRadius: 6 }}
                    />
                  }
                  <h1>{post?.title?.rendered}</h1>
                </header>

              </Zoom>

              <Divider> </Divider>
              <br></br>

              <div className='post-content-div' dangerouslySetInnerHTML={{ __html: post?.content?.rendered }} />
            </>
          }
          {skeleton()}

      </Card>


    </Container >

  )
}

export default Post;

// export default connector(Login)
// const connector = connect(mapStateToProps, mapDispatchToProps)