import React, { Component } from 'react'

import Article from '../reducers/article-reducer'

const ArticlePage = () => {
    const Art = Article.state.article;
    return (
        <section>
            <title>{Art.title}</title>
            <article>
                {Art.content}
            </article>
        </section>
    )
}

export default ArticlePage