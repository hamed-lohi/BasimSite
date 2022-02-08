import { Container } from "@mui/material";

export const Footer = (props: any) => {

  const footerStyle = {
    background: '#fff',
    padding: " 30px 0"

  };

  const aStyle = {
    color: '#608dfd'
  };
  const aHoverStyle = {
    borderBottom: '2px solid #608dfd'
  };

  return (
    <div>
      <div id='footer' style={footerStyle}>
        <Container>
          <p style={{color: '#888',fontSize: '14px',textAlign: 'center'}} >
            &copy;2022 Imex4p Trading {' '}
            <a style={aStyle} href='/#' rel=''>
              Imex4p.com
            </a>
          </p>
        </Container>
      </div>
    </div>
  )
}
