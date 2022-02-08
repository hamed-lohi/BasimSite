import './testimonials.css';

export const Testimonials = (props: any) => {
  return (
    // <div id='testimonials'>
    //   <div className='container'>
    //     <div className='section-title text-center'>
    //       <h2>What our clients say</h2>
    //     </div>
    //     <div className='row'>
    //       {props.data
    //         ? props.data.map((d, i) => (
    //             <div key={`${d.name}-${i}`} className='col-md-4'>
    //               <div className='testimonial'>
    //                 <div className='testimonial-image'>
    //                   {' '}
    //                   <img src={d.img} alt='' />{' '}
    //                 </div>
    //                 <div className='testimonial-content'>
    //                   <p>"{d.text}"</p>
    //                   <div className='testimonial-meta'> - {d.name} </div>
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         : 'loading'}
    //     </div>
    //   </div>
    // </div>

    <div id='testimonials'>
      <div className='container'>
        <div className='section-title text-center'>
          <h2>اطلاعات تماس</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d: any, i:number) => (
                <div key={`${d.name}-${i}`} className='col-md-12'>
                  <div className='testimonial'>
                    <div className='testimonial-image'>
                      {' '}
                      {/* <img src={d.img} alt='' />{' '} */}
                      <i className={d.img}></i>
                    </div>
                    <div className='testimonial-content'>
                      <div className='testimonial-meta'> - {d.name} </div>
                      <p>

                      {(d.name === 'تلفن :')? 
                        <a
                        href={'tel:'+d.text.replace('-', '')}
                        className='btn btn-phone btn-lg page-scroll'
                        >
                          {d.text}
                          <span className={'fa fa-phone'}></span>
                          
                        </a>
                        : d.text
                      }
                      </p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>

  )
}
