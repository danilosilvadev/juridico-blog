import React, { Component } from 'react'

import Styled from 'styled-components'
import ValidatingFields from '../utils/validating-fields'

import * as ArticlesActions from '../actions/article-actions'

import ArticlePage from './article-page'
import Article from '../stores/article-reducer'


const Label = Styled.label`
            display: -webkit-flex;
            display: flex;
            margin-top: 15px;
            justify-content: center;
            font-size: 200%;
            color:  #f9a19f;
            font-weight: bold;
            display: block;
`

const Input = Styled.input`
            border: none;
            border-radius: 1px;
            border-bottom: 1px solid #f9a19f;
            outline: none;
            font-size: 80%;
            background: none;
            width: 90%;
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
`
const Textarea = Styled.textarea`
                border: none;
                border-radius: 3px;
                border-bottom: 2px solid  #f9a19f;
                outline: none;
                width: 90%;
                font-size: 100%;
                display: -webkit-flex;
                display: flex;
                justify-content: flex-start;
`

const Form = Styled.form`
            align-items: center;
            margin-top: 10%;
`
const Span = Styled.span`
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
`

const Button = Styled.input`
            background: none;
            border: 1px solid #f9a19f;
            color: #f9a19f;
            border-radius: 3px;
            font-size: 200%;
            display: -webkit-flex;
            display: flex;
            justify-content: flex-start;
            outline: none;
`

class CreateArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            article: ''
        };

        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeArticle = this.handleChangeArticle.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(event) {
        this.setState({ title: event.target.value });
    }

    handleChangeArticle(event) {
        this.setState({ article: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (ValidatingFields.isEmptyOrNullDrashboard(this.state.title, this.state.article)) {
            return alert('Preencha os campos');
        } else {
            alert('Nome: ' + this.state.title);
            alert('Message: ' + this.state.article);
            ArticlesActions.createArticle(this.state.title, this.state.article);
        }
    }

    createArticle() {
        ArticlesActions.createArticle(456, "title test", "example of an article");
    }

    render() {
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Label>
                    <Span>Título</Span>
                    <Input type="text" onChange={this.handleChangeTitle} />
                </Label><Label>
                    <Span>Postagem</Span>
                    <Textarea onChange={this.handleChangeArticle} />
                </Label><br />
                <Button type="submit" value="Enviar" />
            </Form>
            <ArticlePage />
            { Article.state.article.title}
            </div>
        )
    }
}

export default CreateArticle