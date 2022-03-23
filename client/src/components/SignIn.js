import styled from "styled-components";
import { useHistory } from 'react-router';

const SignIn = (props) => {
    const history = useHistory();
    const handleClick = () => history.push('/home');
    return (
        <Content>
            <Box>
                <Img>
                    <img src="images/signin1.svg" alt="" />
                </Img>
                <Field>
                    <h3>Sign In</h3>
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" />
                    <label>Password</label>
                    <input type="text" placeholder="Enter a password" />
                    <button onClick={handleClick}>Sign In</button>
                </Field>
            </Box>
        </Content>
    )
}

const Content = styled.div``;

const Box = styled.div`
display: flex;
`;

const Img = styled.div`
flex: 0.5;
img {
    height: 90vh;
    margin-top: 50px;
}
`;

const Field = styled.div`
flex: 0.5;

h3 {
text-align: center;
font-size: 30px;
margin-top: 60px;
margin-bottom: 60px;
}

label {
font-size: 20px;
margin-left: 30px;
font-weight: normal;
padding: 10px 12px;
}

input {
height: 50px;
width: 80%;
margin-left: 40px;
border: 1px solid #ccc;
border-radius: 5px;
margin-top: 20px;
margin-bottom: 25px;
}

button {
    margin-top: 30px;
    margin-left: 240px;
    padding: 17px 50px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    cursor: pointer;
}
`;

export default SignIn;