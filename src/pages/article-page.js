import React, { Component } from 'react'

import Article from '../stores/article-store'

class ArticlePage extends Component {
    render() {
        return (
            <section>
                <title>{Article.article.title}</title>
                <article>
                    {Article.article.content}
                </article>
            </section>
        )
    }
}

export default ArticlePage