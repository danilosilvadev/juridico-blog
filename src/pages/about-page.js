import React, { Component } from 'react'
import Styled from 'styled-components'

/* import Pic from '../assets/foto_roger.jpg' */

import '../components/responsive.css';


const Bio = Styled.div`
        color: DimGrey;
        display: -webkit-flex;
        display: flex;
        text-align: left;
`

/* const Image = Styled.div`
    display: -webkit-flex;
    display: flex;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background-image: url(${Pic});
` */

const Span = Styled.span`
        display: -webkit-flex;
        display: flex;
        margin: 20px;
`

const H1 = Styled.span`
        font-size: 60px;
        display: -webkit-flex;
        display: flex;
        font-weight: bold;
        justify-content: center;
`

/*function upd() {
    let h = "100%";
    Image.height(h / 5);
    Image.width(h / 5);
}
upd();
window.onresize = upd;*/

const Title = Styled.span`
    font-color: #bb0e0c;
    font-size: 40px;
    display: -webkit-flex;
    display: flex;
    color: #f9a19f;
    font-weight: bold;
`

const SubTitle = Styled.span`
    font-color: #bb0e0c;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    color: #bb0e0c;
`


class AboutPage extends Component {

    /*
    onMobileScreen(){
        if (checkingScreen == true){
            console.log("deu certo porra!")
        }
    } */

    render() {
        return (
            <div>
                <H1>Dr. Rogelito D. da Silva</H1><br />
                <SubTitle>Advogado, subtenente, pai e um eterno aprendiz.</SubTitle>
                <br /><br />
                <Title>Sobre mim</Title>

                <Bio>
                    <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante vitae odio facilisis cursus sagittis eu velit. Curabitur pharetra in ipsum ut commodo. Ut lacinia, risus id placerat tincidunt, sem purus auctor nunc, id pellentesque mi felis ac tellus. Curabitur elit diam, ornare non finibus quis, sollicitudin sit amet justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla elementum ipsum dolor. Mauris nec odio bibendum justo tincidunt volutpat. Suspendisse porttitor nunc gravida nisi sodales, commodo fringilla augue ornare.

Ut molestie metus quis leo egestas lacinia. Sed rhoncus nulla sed suscipit porta. Proin non erat hendrerit, bibendum urna gravida, tempus purus. Aenean ornare efficitur urna, sed tincidunt ipsum fermentum sit amet. Nullam sit amet consectetur purus. Mauris eu justo nec odio sodales tempor in a urna. Pellentesque at lectus urna. Sed tristique ipsum at bibendum bibendum. Nam vitae posuere lectus. Fusce vel massa dui. Sed et lacus mollis, porta lorem nec, sollicitudin sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum non arcu non vulputate. Phasellus convallis pulvinar arcu eu elementum.

Aliquam egestas lacus sit amet turpis vestibulum, vel ornare est ultrices. Duis rutrum egestas maximus. Cras ornare nibh sed urna facilisis, eget scelerisque lacus vestibulum. Sed suscipit mi risus, ac malesuada enim commodo eget. Etiam malesuada purus condimentum venenatis fringilla. Pellentesque vehicula auctor felis a venenatis. Nam ut lorem posuere lectus scelerisque scelerisque quis at nisi. Donec consectetur iaculis aliquet. Aliquam tempus condimentum risus.</Span>
                </Bio>
            </div>)
    }
}

export default AboutPage