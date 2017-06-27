import React, { Component } from 'react'

import Styled from 'styled-components'

const Article = Styled.article`
        text-align: left;
        margin-left: 25px;
        margin-right: 25px;
        color: DimGrey;
`

const Button = Styled.a`
        float: left;
        margin: 25px;
        color: #bb0e0c;
        text-decoration: none;
`

const Section = Styled.section`
    border-bottom: 6px solid #bb0e0c;
    border-width: 1px;
    border-collapse: separate;
    border-spacing: 25px;
    padding-bottom: 85px;
`

class Articles extends Component {
    render() {
        return (
            <Section>
                <h1><header>Some text</header></h1>
                <Article>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque condimentum turpis vitae tortor dapibus ornare. Nam laoreet quis leo vel accumsan. Quisque nec faucibus elit. Quisque semper aliquet tristique. Nullam euismod est a justo accumsan, at dapibus diam lobortis. Ut vehicula ante in euismod fringilla. Proin consequat non lectus sit amet iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut nulla ultricies, fringilla sem id, lobortis sem. Donec viverra consequat augue eget accumsan. Suspendisse potenti. Cras aliquam lobortis mi, ut iaculis ligula. Morbi fermentum, nisi id auctor dapibus, dolor metus pulvinar velit, quis congue est libero eu felis. Maecenas sed ornare sapien.

Nunc vitae diam vel leo tristique convallis et at libero. Vivamus ullamcorper elementum lectus, id malesuada massa vehicula eget. Mauris sit amet felis sed diam consectetur pulvinar sed vitae libero. Donec in velit aliquet, dapibus enim ut, aliquam sem. Mauris sodales justo eget lobortis congue. Nunc elementum lacinia magna in elementum. Nullam dolor nulla, congue ac consequat feugiat, blandit vel odio. Pellentesque sed dignissim urna, et porta magna. Sed tempor, sem at venenatis accumsan, nibh ante lobortis mauris, non ultricies nulla mauris eu diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc quis elit in ipsum vulputate varius. Aliquam congue imperdiet rutrum. Maecenas quis erat mauris. Fusce id facilisis magna.

Sed malesuada mollis orci ut rutrum. Fusce finibus lacus at urna ullamcorper, vel imperdiet tortor auctor. Curabitur augue felis, molestie ac ullamcorper non, finibus sit amet diam. Suspendisse tempor felis dolor, id euismod libero efficitur eget. Nullam nec nunc id eros maximus hendrerit a vitae velit. Donec tincidunt nisl eget nulla dapibus sollicitudin. Cras gravida felis eu laoreet egestas. Ut cursus, dolor et cursus dictum, orci ante hendrerit leo, vitae lacinia lectus nulla vitae arcu. Quisque vel aliquam leo.    
                </Article>
                <Button href="">Ler mais</Button>
            </Section>
        )
    }
}

export default Articles