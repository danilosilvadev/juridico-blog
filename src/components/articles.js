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
        this.state = { articles: null }
    }

    componentDidMount() {
        this.setState = {
            articles: ArticleStore.getAll(),
        };
    }

    checkingArticles(articles) {
        if (articles == null || articles == "" || articles == undefined ){
             return true } 
        else {
             return false }
    }
        render() {

            
            const { articles } = this.state;

            const articlesContent = checkingArticles(articles) ? "null" : articles.map((article) => {
                return <li key={article.id}><h1> {article.title} </h1>
                    {article.content}<Button href="">Ler mais</Button></li>;
            })

            return (
                <Section>
                    <ul>
                        <Article>
                            { articlesContent }
                        </Article>
                    </ul>
                </Section>
            )
        }
    }

    export default Articles