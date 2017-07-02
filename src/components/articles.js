import React, { Component } from 'react'
import Styled from 'styled-components'

import ArticleStore from '../stores/article-store'

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
    constructor() {
        super();
        this.state = {
            articles: ArticleStore.getAll(),
        };
    }

    render() {

        const { articles } = this.state;

        const articlesComponents = articles.map((article) => {
            return <Article key={article.id}{...article} />;
        })

        return (
            <Section>
                <ul>
                    <h1><header>{ articlesComponents }</header></h1>
                    <Article>
                        {articlesComponents}
                    </Article>
                    <Button href="">Ler mais</Button>
                </ul>
            </Section>
        )
    }
}

export default Articles