import styled from "styled-components";

const Card = (props) => {
    return (
        
        <ProductCard>
            <img src="images/cam.jpeg" alt="" />
            <Content>
                <h5 className="card-title">Camera</h5>
                <p className="card-description">Lorem ipsum dolor sit amet. Aut odit quia ut voluptas excepturi et dolorum eius nam galisum laboriosam. Aut sequi dicta qui quis Quis non accusantium nemo et quis maiores.</p>
                <button>Send Swap Request</button>
            </Content>
        </ProductCard>
    )
}

const ProductCard = styled.div`
height: 370px;
width: 320px;
border-radius: 5px;
border:1px solid #ccc ;
margin-left: 30px;

img {
    width: 320px;
    height: 200px;
    object-fit: fill;
    align-items: center;
    justify-content: center;
}
`;

const Content = styled.div`
h5{
    font-weight: bold;
    font-size: 15px;
    margin-top: 5px;
    margin-left: 12px;
}

p{
    color: darkgrey;
    font-size: 15px;
    margin-top: -12px;
    text-align: left;
    margin-left: 4px;
}

button {
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    margin-top: 10px;
}
`; 

export default Card;