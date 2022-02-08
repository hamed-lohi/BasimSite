import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsappIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkdInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './contact.module.scss';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';


const initialState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

export const Contact = (props: any) => {

  const [fields, setFields] = useState(initialState);
  const [open, setOpen] = useState(null as any);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFields((prevState: any) => ({ ...prevState, [name]: value }))
  }

  //const clearState = () => setFields({ ...initialState })

  const handleSubmit = (e: any) => {
    e.preventDefault()

    sendContactMsg();
    // emailjs.sendForm(
    //   'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID'
    // )
    //   .then(
    //     (result) => {
    //       console.log(result.text)
    //       clearState()
    //     },
    //     (error) => {
    //       console.log(error.text)
    //     }
    //   )
  }

  const sendContactMsg = () => {
    setLoading(true);

    const baseUrl = (window as any).baseUrlApi + 'contact-form-7/v1/contact-forms/109/feedback';
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };

    const formData = new FormData();
    formData.append('your-name', initialState.name);
    formData.append('your-email', initialState.email);
    formData.append('your-message', initialState.message);
    formData.append('your-subject', initialState.subject);
    formData.append('your-phone', initialState.phone);

    console.log(formData);

    axios.post(baseUrl, formData, config)
      .then((pst) => {
        console.log(pst.data);
        setOpen(pst.data);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
      });
    ;
  }

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(null);
  };

  
  return (

    <div id='contact'  className={styles.contact}>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={5}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                // height: 240,
                background: 'none',
                boxShadow: "none"
              }}
            >
              <Typography variant="h5" align="justify" className={styles.cardtitle} color="text.secondary" paragraph>
                اطلاعات تماس
              </Typography>
              <Typography className={styles.Typo}>
                <LocationIcon className={styles.iconAlign} sx={{ fontSize: 20, color: 'white' }} />
                <Box className={styles.Box} component="span" sx={{ p: 2, lineHeight: 2 }}>
                  <Box component="span" className={styles.Infotxt}>آدرس</Box>
                   {' '} {props.data ? props.data.address : 'loading'}
                </Box>
              </Typography>
              <Typography className={styles.Typo}>
                <PhoneIcon className={styles.iconAlign} sx={{ fontSize: 20, color: 'white' }} />
                <Box className={styles.Box} component="span" sx={{ p: 2, lineHeight: 2 }}>
                <Box component="span" className={styles.Infotxt}>تلفن</Box>
                  {' '}
                  <a className={styles.phones} href={'tel:' + (props.data ? props.data.phone.replace('-', '') : '')}>
                    {props.data ? props.data.phone : 'loading'}
                  </a>
                </Box>
              </Typography>
              <Typography className={styles.Typo}>
                <EmailIcon className={styles.iconAlign} sx={{ fontSize: 20, color: 'white' }} />
                <Box className={styles.Box} component="span" sx={{ p: 2, lineHeight: 2 }}>
                <Box component="span" className={styles.Infotxt}>ایمیل</Box>
                  {' '}
                  {props.data ? props.data.email : 'loading'}
                </Box>
              </Typography>
              <Typography component="span" className={styles.iconCard +' '+ styles.blur} sx={{ background: 'none', boxShadow: 'none', border: 'none', }}>
                <Grid container spacing={0} columns={10}>
                  <Grid item xs={2}>
                    <a href={props.data ? props.data.facebook : '/'}>
                      <IconButton aria-label="delete" >
                        <FacebookIcon sx={{ fontSize: 35, color: 'white' }} />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item xs={2}>
                    <a href={props.data ? props.data.twitter : '/'}>
                      <IconButton aria-label="delete" >
                        <TelegramIcon sx={{ fontSize: 35, color: 'white' }} />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item xs={2}>
                    <a href={props.data ? props.data.youtube : '/'}>
                      <IconButton aria-label="delete" >
                        <InstagramIcon sx={{ fontSize: 35, color: 'white' }} />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item xs={2}>
                    <a href={props.data ? props.data.whatsapp : '/'} rel="noreferrer" target="_blank">
                      <IconButton aria-label="delete" >
                        <WhatsappIcon sx={{ fontSize: 35, color: 'white' }} />
                      </IconButton>
                    </a>
                  </Grid>
                  <Grid item xs={2}>
                    <a href={props.data ? props.data.whatsapp : '/'} rel="noreferrer" target="_blank">
                      <IconButton aria-label="delete" >
                        <LinkdInIcon sx={{ fontSize: 35, color: 'white' }} />
                      </IconButton>
                    </a>
                  </Grid>

                </Grid>
              </Typography >
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={7}>
            <Paper
              className={styles.paperblur}
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" align="justify" className={styles.cardtitle} color="text.secondary" paragraph>
                در تماس باشید
              </Typography>
              <Typography className={styles.Box + ' '+ styles.sendTypo} >
                لطفا فرم زیر را برای ارسال ایمیل به ما پر کنید و در اسرع وقت با شما تماس خواهیم گرفت.
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} >
                    <TextField id="your-name" name='name' label="Name" fullWidth className={styles.Inputtxts} variant="filled" color="success" multiline rows={1} InputLabelProps={{ sx: {color: '#5ca9fb'}, style: {fontSize: 15} }} required onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="your-phone" name='phone' type='number' label="Phone Number" fullWidth className={styles.Inputtxts + ' '+ styles.inputAlign} variant="filled" color="success" multiline rows={1} InputLabelProps={{ sx: {color: '#5ca9fb'}, style: {fontSize: 15} }} required onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField id="your-email" name='email' type={'email'} label="Email" fullWidth className={styles.Inputtxts + ' '+ styles.inputAlign} variant="filled" color="success" multiline rows={1} InputLabelProps={{ sx: {color: '#5ca9fb'}, style: {fontSize: 15} }} required onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField  id="your-subject" name='subject' label="Subject" fullWidth className={styles.Inputtxts}  variant="filled" color="success" multiline rows={1} InputLabelProps={{ sx: {color: '#5ca9fb'}, style: {fontSize: 15} }} required onChange={handleChange} />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="your-message"
                      name='message'
                      label="Message"
                      multiline
                      rows={4}
                      required
                      onChange={handleChange}
                      className={styles.Inputtxts}
                      color="success"
                      fullWidth
                      variant="filled"
                      InputLabelProps={{ sx: {color: '#5ca9fb'} , style: {fontSize: 15} }}
                    />
                  </Grid>
                </Grid>
                <Box sx={{ mt: 3, mb: 2, position: 'relative',  }}>
                  <Button
                    // onClick={sendContactMsg}
                    disabled={loading}
                    className={styles.Box}
                    type="submit"
                    size="large"
                    variant="contained"
                    sx={{ width: "30%" }}
                  >
                    {loading && (
                    <CircularProgress
                      size={30}
                      sx={{
                        color: green[900],
                        position: 'absolute',
                        //top: '50%',
                        //right: '50%',
                        //marginTop: '-12px',
                        //ml: '-150px',
                      }}
                    />
                  )}
                    ارسال پیام
                  </Button>
                  
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Snackbar
          open={Boolean(open)}
          autoHideDuration={6000}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }} >
          <Alert onClose={handleClose} variant="standard" severity={open?.status === 'validation_failed' ? "error" : "success"} sx={{ width: '100%' }}>
            {open?.message}
          </Alert>
        </Snackbar>

      </Container>
    </div>

  )
}
