import React, { Component } from 'react'
import Styled from 'styled-components'
import PropTypes from 'prop-types'
import List from '../containers/ArticlesList'

const Article = Styled.article`
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

const ArticlesList = Styled.li`
    border-bottom: 6px solid #bb0e0c;
    border-width: 1px;
    border-collapse: separate;
    border-spacing: 25px;
    padding-bottom: 65px;
    list-style-type: none;
`

const Span = Styled.span`
    display: -webkit-flex;
    display: flex;
    text-align: left;
`
const articlesList = { articles: List.getAll() }

const loadArticleList = articles => {
    const articlesContent = articles.map((article) => {
        return <ArticlesList key={article.id}>
            <h2>{article.title}</h2>
            <Span>{article.content}</Span><br />
            <Button href="">Ler mais</Button>
        </ArticlesList>;
    });
    return articlesContent;
}

const checkingArticles = articles => {
    if (articles === null || articles === "" || articles === undefined) {
        return true
    }
    else {
        return false
    }

    render.propTypes = {
        articles: PropTypes.func.isRequired
    }
}

const Articles = () => {
    if (this.checkingArticles(articles)) {
        return (
            <section>
                <h1>List is empty</h1>
            </section>
        )
    } else {
        const articlesContent = this.loadArticleList(articles);
        return (
            <section>
                <ul>
                    <Article>
                        {articles}
                    </Article>
                </ul>
            </section>
        )
    }
}

articlesList.PropTypes = {
    onLoad: PropTypes.func.isRequired
}

export default Articles

/*
constructor() {
        super();
        this.state = { articles: null }
    }

    loadArticles() {
        this.setState({
            articles: ArticleReducer.getAll()
        });
    }

    loadArticleList(articles) {
        const articlesContent = articles.map((article) => {
            return <ArticlesList key={article.id}>
                <h2>{article.title}</h2>
                <Span>{article.content}</Span><br />
                <Button href="">Ler mais</Button>
            </ArticlesList>;
        });
        return articlesContent;
    }

    //make this in the component father
    componentWillMount() {
        this.loadArticles();
    }

    checkingArticles(articles) {
        if (articles === null || articles === "" || articles === undefined) {
            return true
        }
        else {
            return false
        }

        render.propTypes = {
            articles: PropTypes.func.isRequired
        }
    }
    render() {

        const { articles } = this.state;
        
        if (this.checkingArticles(articles)) {
            return (
                <section>
                    <h1>List is empty</h1>
                </section>
            )
        } else {
            const articlesContent = this.loadArticleList(articles);
            return (
                <section>
                    <ul>
                        <Article>
                            {articles}
                        </Article>
                    </ul>
                </section>
            )
        }
    } */