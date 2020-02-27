import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div style={{ border: '1px solid #000 ', margin: 5, padding: 5 }}>
                {this.props.children}
            </div>
        );
    }
}

class Article extends Component {
    render() {
        return (
            <section>
                <h2>{this.props.title}</h2>
                <p><em>{this.props.author}</em></p>
                <Box>{this.props.date}</Box>
                <article>
                    {this.props.children}
                </article>
            </section>
        );
    }
}

export default class Childrens extends Component {
    render() {
        return (
            <div>
                <Article
                    title='Franklin la tortuga gay'
                    author='Frijolito'
                    date={new Date().toLocaleDateString()}
                >
                    <p>asdjhagsdgasdgagsdjhaagshdga shdjagsdashdga jhsdgajhs ajhsgd jhasgd hjagsjhdga</p>
                </Article>
            </div>
        );
    }
}