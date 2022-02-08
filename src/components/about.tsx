

import './about.scss';
//import aboutImg from '../../public/img/about.jpg';
import { Page } from '../pages/page/page';
import { MainPages } from './main-pages';

export const About = (props:any) => {
  return (
    <div id='about'>
      {/* <Page pageId={23} /> */}
      <MainPages pageId={23}></MainPages>
    </div>
  )
}
