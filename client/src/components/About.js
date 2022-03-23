import styled from "styled-components";
import Footer from "./Footer";
import Help from './Help'

const About = (props) => {
  return (
    <Container>
      <Video>
        <video autoPlay loop playsInline>
          <source src="/video/com.mp4" type="video/mp4" />
        </video>
        <h1>About Us</h1>
      </Video>
      <TextField>
        <Text>
        <h5>We cutout the middleman and get money
          directly into the hand of weavers</h5>
          </Text>
      </TextField>
      <Help />

      <Footer />
    </Container>
  )
}

const Container = styled.section`
padding:  0 0 26px;

`;


const Video = styled.div`
margin-top: 100px ;
width: 100%;
height: 100%;

video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    opacity: 1;
    z-index: 0;
    left: 0;
    object-fit: cover;
    justify-content: center;
    align-items: center;
  }

  h1 {
    z-index: 1;
    position: absolute;
    color: white;
    font-size: 70px;
    bottom: 0;
    text-align: center;
    margin-left: 600px;
    margin-bottom: 0;
  }



  
`;

const TextField = styled.section`
background-color:#ffe5ff ;
height: 500px;
width: 100%;
margin-top: 40rem;
display: block;


`;

const Text = styled.div`

h5 {
/* 
font-size: 40px;
font-weight: 300;
font-family: Avenir-Roman, sans-serif;

 */
margin-top: 46.5rem;
display: flex;
text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 40px;
font-weight: 300;
font-family: Avenir-Roman, sans-serif;
margin-left: 500px;
margin-right: 500px;
vertical-align: middle;
transform: translateY(50%);
    
}
`;



// const Email = styled.div``;

// const Services = styled.div``;

// const Developer = styled.div

export default About;