import React, { Component } from 'react'

import Article from '../stores/article-reducer'

class ArticlePage extends Component {
    render() {
        const Art  = Article.state.article;
        return (
            <section>
                <title>{Art.title}</title>
                <article>
                    {Art.content}
                </article>
            </section>
        )
    }
}

export default ArticlePage