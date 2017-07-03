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

        const articlesTitle = articles.map((article) => {
            return <li key={article.id}> {article.title} </li>;
        })

        const articlesContent = articles.map((article) => {
            return <li key={article.id}> {article.content} </li>;
        })

        return (
            <Section>
                <ul>
                    <h1><header>{articlesTitle}</header></h1>
                    <Article>
                        {articlesContent}
                        <Button href="">Ler mais</Button>
                    </Article>
                </ul>
            </Section>
        )
    }
}

export default Articles