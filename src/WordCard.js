import React, { Component } from 'react';
import _ from 'lodash';

import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)

        console.log(this.state.word);
        console.log(this.state.chars);
        console.log(this.state.attempt);
        console.log(this.state.guess);
        console.log(this.state.completed);

    }

    activationHandler = c => {
        let guess = [...this.state.guess, c]

        console.log("word " + this.state.word);
        console.log("chars " + this.state.chars);
        console.log("attempt " + this.state.attempt);
        console.log("guess " + this.state.guess);

        console.log(guess.join('').toString());
        console.log(this.state.word);

        console.log("completed " + this.state.completed + " Done");

        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
    }

    render(){
        return (
            <div>
                {
                    Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} activationHandler={this.activationHandler} attempt={this.state.attempt}/>)
                }
                {
                    this.state.completed? "Yes" : "No"
                }
            </div>
        )
    }
}