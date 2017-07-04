import React, { Component } from 'react'
import Styled from 'styled-components'

import Pic from '../assets/foto_roger.jpg'


const Span = Styled.span`
        color: DimGrey;
        display: -webkit-flex;
        display: flex;
        text-align: left;
`


class AboutPage extends Component {
    render() {
        return (
            <div><img src={Pic} alt="rogelito" height="342" width="322" />
                <Span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel ante vitae odio facilisis cursus sagittis eu velit. Curabitur pharetra in ipsum ut commodo. Ut lacinia, risus id placerat tincidunt, sem purus auctor nunc, id pellentesque mi felis ac tellus. Curabitur elit diam, ornare non finibus quis, sollicitudin sit amet justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla elementum ipsum dolor. Mauris nec odio bibendum justo tincidunt volutpat. Suspendisse porttitor nunc gravida nisi sodales, commodo fringilla augue ornare.

Ut molestie metus quis leo egestas lacinia. Sed rhoncus nulla sed suscipit porta. Proin non erat hendrerit, bibendum urna gravida, tempus purus. Aenean ornare efficitur urna, sed tincidunt ipsum fermentum sit amet. Nullam sit amet consectetur purus. Mauris eu justo nec odio sodales tempor in a urna. Pellentesque at lectus urna. Sed tristique ipsum at bibendum bibendum. Nam vitae posuere lectus. Fusce vel massa dui. Sed et lacus mollis, porta lorem nec, sollicitudin sapien. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce fermentum non arcu non vulputate. Phasellus convallis pulvinar arcu eu elementum.

Aliquam egestas lacus sit amet turpis vestibulum, vel ornare est ultrices. Duis rutrum egestas maximus. Cras ornare nibh sed urna facilisis, eget scelerisque lacus vestibulum. Sed suscipit mi risus, ac malesuada enim commodo eget. Etiam malesuada purus condimentum venenatis fringilla. Pellentesque vehicula auctor felis a venenatis. Nam ut lorem posuere lectus scelerisque scelerisque quis at nisi. Donec consectetur iaculis aliquet. Aliquam tempus condimentum risus.</Span>
            </div>)
    }
}

export default AboutPage