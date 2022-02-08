import { useEffect, useState } from "react";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import PhoneInTalkSharpIcon from '@mui/icons-material/PhoneInTalkSharp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import Avatar from '@mui/material/Avatar';
import { green, pink, yellow } from '@mui/material/colors';

import './navigation.css';
import logoImg from '../../public/img/logo160.png';
import logoImgFa from '../../public/img/fa-icon.png';
import logoImgEn from '../../public/img/en-icon.png';
import logoImgTr from '../../public/img/tr-icon.png';



import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
//import Container from '@mui/material/Container';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Container from '@mui/material/Container';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
//import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';



import { styled, alpha } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import { MenuProps } from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from "./theme";
import TreeView from "@mui/lab/TreeView";
import TreeItem from "@mui/lab/TreeItem";
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Popover from "@mui/material/Popover";
//import { Link } from "@mui/material";

import axios from "axios";
import { Outlet } from "react-router-dom";//Link,
import { HashLink as Link } from 'react-router-hash-link';

import { useTranslation } from "react-i18next";


const pages = [
  { id: 0, text: 'صفحه اصلی', href: '/#top', expanded: false, categories: [], posts: [] },
  { id: 4, text: 'واردات', href: '', expanded: true, categories: [], posts: [] },
  { id: 5, text: 'صادرات', href: '', expanded: true, categories: [], posts: [] },
  { id: 10, text: 'بازاریابی', href: '', expanded: true, categories: [], posts: [] },
  { id: 0, text: 'نرخ ارز گمرکی', href: '/page/28', expanded: false, categories: [], posts: [] },
  { id: 11, text: 'مقالات', href: '', expanded: true, categories: [], posts: [] },
  { id: 0, text: 'درباره ما', href: '/#about', expanded: false, categories: [], posts: [] },
  { id: 0, text: 'تماس با ما', href: '/#contact', expanded: false, categories: [], posts: [] }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navigation = (props: any) => {

  const baseUrl = (window as any).baseUrlApi;

  const fetchData = () => {
    return axios.get(baseUrl + 'wp/v2/categories?_fields[]=id&_fields[]=name&_fields[]=parent&_fields[]=description&per_page=100')//?_fields[]=title&_fields[]=excerpt&per_page=100
      .then((response) => {
        let categories = response.data;
        //console.log(categories);

        axios.get(baseUrl + 'wp/v2/posts?_fields[]=id&_fields[]=title&_fields[]=categories&per_page=100')
          .then((pst) => {
            let posts = pst.data;
            //console.log(posts);

            structedData(categories, posts);
          });
      });
  };

  const structedData = (cats: any, psts: any) => {
    pages.forEach(item => {
      if (item.id > 0) {
        item.text = cats.find((c: any) => c.id == item.id).name;
        if (item.expanded) {
          let tmp = cats.filter((c: any) => c.parent == item.id);
          if (tmp.length > 0) {
            tmp.forEach((t: any) => {
              t.posts = psts.filter((ps: any) => ps.categories.some((ca: number) => ca == t.id));
            })
          } else {
            item.posts = psts.filter((ps: any) => ps.categories.some((ca: number) => ca == item.id));
          }
          item.categories = tmp;
        }
      }

    })

    setPagesSt(pages);
    //console.log(pages);
  }

  const [pagesSt, setPagesSt] = useState([...pages]);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    fetchData();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };


  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //const open = Boolean(anchorEl);
  // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [openc, setOpenc] = useState({} as any);

  const handleClickc = (key: string) => {

    // console.log(key, openc,!openc);
    // if(!openc){
    //   setOpenc({[key]:true});
    //   console.log(key, openc);
    //   return;
    // }
    setOpenc({ ...openc, [key]: !openc[key] });
  };

  //const [open, setOpen] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const btnfn = (page: any) => {
    const btntmp = (
      <Button
        //aria-describedby={'id'}
        className="menu-btn"
        variant="text"
        size="small"
        //key={page.text}
        //onClick={handleCloseNavMenu}
        //onClick={page.expanded ? handleClick : () => { }}

        sx={{ my: 2, mx: 1, color: 'white', whiteSpace: 'nowrap' }
        } //, display: 'block' 
        //href={page.href}

        endIcon={page.expanded ? <KeyboardArrowDownIcon /> : null}
      >
        {page.text}
      </Button >
    );

    if (page.href) {
      return (
        <Link to={page.href} >
          {btntmp}
        </Link>
      )
    }
    return btntmp;
  }

  const { t, i18n } = useTranslation();
  // you can define a keyPrefix to be used for the resulting t function
  // const { t } = useTranslation('translation', { keyPrefix: 'very.deeply.nested' });
  // const text = t('key'); // "here"

  return (
    <>

      <AppBar position="fixed" sx={{ backgroundColor: '#00167c', zIndex: 10000 }} >
        <Toolbar  >{/* content */}

          {/* <div id='site-header' className='container'> */}
          <Container id='site-header' fixed>
            {/* <div className='navbar-header'> */}
            <Box className="wellcome" sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: { xs: 'center', md: 'unset' } }}>
              <span>{t('welcome to website')}</span>
            </Box>
            {/* </div> */}


            <Stack direction="row-reverse" spacing={2} sx={{ margin: 0, display: { xs: 'inline-flex', md: 'flex' }, width: { xs: '100%', md: 'auto' }, justifyContent: { xs: 'center', md: 'unset' } }} >
              {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button> */}

              <Box className="img-div" sx={{ display: { xs: 'flex', md: 'flex' } }}>
                <img src={logoImgFa} alt="farsi" width="40" height="19" />{' '}
                <img src={logoImgEn} alt="english" width="40" height="19" />
                <img src={logoImgTr} alt="turky" width="40" height="19" />
              </Box>

              {/* <img src='img/about.jpg' className='img-responsive' alt='' />{' '} */}

              {/* <a className='phone-a' href={'tel:04133310272'}>

                <Button
                  className="hidden-xs"
                  //style={{ margin: '0 2px' }}
                  size="medium"
                  variant="contained"
                  //startIcon= {<WhatsAppIcon />}
                  startIcon={<PhoneIcon />}
                  color="success"
                  sx={{
                    display: { sm: 'none', md: 'flex' },
                    backgroundColor: 'success.light',
                    //display: 'inline',
                    //fontWeight: 'bold',
                    //mx: 0.5,
                    fontFamily: 'web-yekan',
                    fontSize: 16,
                    borderRadius: 15,
                    //direction: 'ltr',
                  }} >
                  تماس با ما
                </Button>
              </a> */}


              <a href={'https://wa.me/989128478917'} rel="noreferrer" target="_blank" >
                <Button
                  // className="hidden-xs"
                  size="medium"
                  variant="contained"
                  //startIcon= {<WhatsAppIcon />}
                  startIcon={<WhatsAppIcon />}
                  color="success"
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                    backgroundColor: 'success.light',
                    //display: 'inline',
                    //fontWeight: 'bold',
                    //mx: 0.5,
                    fontFamily: 'web-yekan',
                    fontSize: 16,
                    borderRadius: 15,
                    //direction: 'ltr'
                  }} >
                  مشاوره با واتساپ
                </Button>
              </a>


            </Stack>
          </Container>
          {/* </div> */}

        </Toolbar>
      </AppBar>


      <AppBar id='menu' position="absolute" sx={{ backgroundColor: '#fff' }} >

        <Container fixed>

          <div className="info">


            <>
              <img src={logoImg} className='img-responsive img-logo' alt='Imex4p' /> {' '}

              <a className='navbar-brand page-scroll' href='/' >
                <span>
                  بازرگانی {' '}

                  <span style={{ color: 'blue' }}>ایمکس</span>
                  <span style={{ color: 'red' }}>4P</span>
                </span>
                <br />
                <span>
                  <span style={{ color: 'blue' }}>Imex</span>
                  <span style={{ color: 'red' }}>4p</span>{' '}

                  Trading
                </span>

              </a>{' '}

              {/* <div className="phone-div hidden-xs">
                <a href='tel:04133310272'>
                  041-33310272{' '}
                </a>
                <Avatar sx={{ bgcolor: yellow[700] }}>
                  <PhoneInTalkIcon color="primary" />
                </Avatar>
              </div> */}




            </>

          </div>

          <Toolbar className="nav-div" sx={{ backgroundColor: '#00167c', width: '100%', height: '50px' }} >{/* content */}

            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              LOGO
            </Typography> */}

            {/* -------------------------------------- Mobile Menu ----------------------------------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                  maxHeight: 500,
                  width: '100%',
                  // maxWidth: '350px'
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page.text} onClick={handleCloseNavMenu} >
                    <a href={page.href}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </a>
                  </MenuItem>
                ))} */}


                <List
                  sx={{ width: '100%', bgcolor: 'background.paper' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  {pagesSt.map((page: any) => (
                    <div key={'e' + page.text}>
                      <Link to={page.href}>
                        <ListItemButton onClick={page.expanded ? () => { handleClickc(page.id); } : handleCloseNavMenu} sx={{ pt: 0.5, pb: 0.5 }} >
                          {/* <ListItemIcon>
                        <SendIcon />
                        </ListItemIcon> */}
                          <ListItemText primary={<Typography sx={{ fontFamily: 'web-yekan', fontSize: '1.2rem' }} >{page.text}</Typography>} />

                          {!page.expanded ? null : openc[page.id] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                      </Link>
                      {page.categories.length > 0 &&

                        <Collapse in={openc[page.id]} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ color: "black" }} >
                            {page.categories.map((cteg: any) => (
                              <div key={'a' + cteg.id} >
                                <ListItemButton sx={{ pr: 2 }}>
                                  <ListItemText primary={<Typography sx={{ fontFamily: 'web-yekan', fontSize: '1.1rem', color: 'error.dark' }} >{cteg.name}</Typography>} />
                                </ListItemButton>
                                {cteg.posts.map((po: any) => (
                                  <ListItemButton key={'b' + po.id} sx={{ pr: 3, pt: 0.5, pb: 0.5 }} >
                                    <Link to={`post/${po.id}`}>
                                      {/* <ListItemText primary={po.title.rendered} /> */}
                                      <Button variant="text" sx={{ color: 'rgba(2, 22, 107, 0.87)' }} onClick={handleCloseNavMenu} ><Typography sx={{ fontFamily: 'web-yekan', fontSize: '1rem', fontWeight: 'bold' }} >{po.title.rendered}</Typography></Button>
                                    </Link>
                                  </ListItemButton>
                                ))}
                              </div>
                            ))}

                          </List>
                        </Collapse>
                      }

                      {page.posts.length > 0 &&

                        <Collapse in={openc[page.id]} timeout="auto" unmountOnExit>
                          <List component="div" disablePadding sx={{ color: "black" }} >

                            {page.posts.map((po: any) => (
                              <ListItemButton key={'c' + po.id} sx={{ pr: 2, pt: 0.5, pb: 0.5 }}>
                                <Link to={`post/${po.id}`}>
                                  {/* <ListItemText primary={po.title.rendered} /> */}
                                  <Button variant="text" sx={{ color: 'rgba(2, 22, 107, 0.87)' }} onClick={handleCloseNavMenu} ><Typography sx={{ fontFamily: 'web-yekan', fontSize: '1rem', fontWeight: 'bold' }} >{po.title.rendered}</Typography></Button>
                                </Link>
                              </ListItemButton>

                            ))}

                          </List>
                        </Collapse>

                      }

                    </div>

                  ))}

                </List>


              </Menu>





            </Box>

            {/* <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              LOGO
            </Typography> */}

            {/* -------------------------------------- Desktop Menu ----------------------------------------- */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pagesSt.map((page: any) => (

                //<>
                //{page.expanded &&

                <LightTooltip
                  key={'p' + page.text}
                  disableFocusListener
                  //disableHoverListener
                  disableTouchListener

                  arrow
                  sx={{
                    backgroundColor: theme.palette.common.white,
                    bgcolor: theme.palette.common.white,
                    color: 'rgba(0, 0, 0, 0.87)',
                    boxShadow: theme.shadows[1]
                  }}

                  title={page.expanded == false ? '' :

                    <TreeView
                      onClick={(e) => { e.preventDefault(); }}
                      dir="rtl"
                      expanded={page.categories.map((m: any) => 'a' + m.id)}
                      aria-label="file system navigator"
                      defaultCollapseIcon={<ExpandMoreIcon />}
                      defaultExpandIcon={<ChevronRightIcon />}
                      sx={{ height: 'auto', flexGrow: 1, maxWidth: 'auto', minWidth: 140, overflowY: 'auto' }}
                    >
                      {page.categories.length > 0 &&
                        page.categories.map((ct: any) => (
                          <TreeItem key={'a' + ct.id} nodeId={'a' + ct.id} label={<Button variant="text" sx={{ border: 'solid 1px white', fontSize: '16px', fontWeight: 'bold', color: 'error.dark' }} href='' >{ct.name}</Button>} >
                            {ct.posts.map((po: any) => (
                              <TreeItem key={'b' + po.id} nodeId={'b' + po.id} label={<Link to={`post/${po.id}`}><Button variant="text" sx={{ fontSize: '14px', fontWeight: 'bold', color: 'rgba(2, 22, 107, 0.87)' }} >{po.title.rendered}</Button></Link>} />
                            ))}
                          </TreeItem>
                        ))}


                      {page.posts.length > 0 &&
                        page.posts.map((po: any) => (
                          <TreeItem key={'c' + po.id} nodeId={'c' + po.id} label={<Link to={`post/${po.id}`}><Button variant="text" sx={{ fontSize: '14px', fontWeight: 'bold', color: 'rgba(2, 22, 107, 0.87)' }} >{po.title.rendered}</Button></Link>} />
                          // 
                        ))
                      }

                    </TreeView>


                  } >

                  {btnfn(page)}

                </LightTooltip>

                //}


                //</>
              ))}


            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

          </Toolbar>

        </Container>
      </AppBar >


      {/* <Outlet /> */}

    </>
  )
}


const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }: any) => {
  return ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  });
});

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }: any) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));