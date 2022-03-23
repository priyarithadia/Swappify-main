import styled from "styled-components";
import { useHistory } from 'react-router';

const LoginPopup = (props) => {
    const history = useHistory();
    const handleClick = () => history.push('/signin');
    const handleClicks = () => history.push('/home');
    
    return (
        <PopUp>
            <Box>
              <SignUp>
                  <h4>Welcome to</h4>
                  <h3>SWAPPIFY</h3>
                  <p>SignIn to your account</p>
                  <button onClick={handleClick}>Sign In</button>
                  </SignUp> 
              <SignIn>
                  <h3>Create Account</h3>
                  <label>Email</label>
                  <input type="text" placeholder="Enter your email"/>
                  <label>Username</label>
                  <input type="text" placeholder="Choose your username" />
                  <label>Password</label>
                  <input type="text" placeholder="Enter a password" />
                  <button onClick={handleClicks}>Sign Up</button>
                  </SignIn> 
            </Box>
        </PopUp>
    )
}

const PopUp = styled.div`
margin: auto;
padding: 60px 60px ;
`;

const Box = styled.div`
display: flex;
margin-top: 90px;
margin-left: 150px;
margin-right: 150px;
height: 80vh;
width: 80%;
border: 1px solid #ccc;
border-radius: 5px;

`;

const SignUp = styled.div`
flex: 0.4;
/* margin-left: 40px;
margin-top: 180px; */
background-color: #7f00ff;

h4 {
text-align: center;
margin-left: 20px;
margin-top: 200px;
font-size: 40px;
font-weight: normal;
color: #fff;
margin-bottom: 1px;
}

h3 {
    text-align: center;
margin-left: 20px;
font-size: 45px;
font-weight: bold;
color: #fff;
padding: 2px 2px;
margin-top: 5px;
}

p {
    text-align: center;
margin-left: 25px;
color: lightgray;
margin-top: 40px;
font-size: 18px;
}

button {
margin-top: 20px;
margin-left: 170px;
padding: 12px 30px;
border-radius: 4px;
border: none;
text-align: center;
cursor: pointer;
}
`;

const SignIn = styled.div`
flex: 0.6;

h3 {
text-align: center;
font-size: 30px;
}

label {
font-size: 20px;
margin-left: 30px;
font-weight: normal;
padding: 10px 12px;
}

input {
height: 40px;
width: 90%;
margin-left: 40px;
border: 1px solid #ccc;
border-radius: 5px;
margin-top: 15px;
margin-bottom: 17px;
}

button {
    margin-top: 30px;
    margin-left: 260px;
    padding: 12px 30px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    cursor: pointer;
}
`;

export default LoginPopup;