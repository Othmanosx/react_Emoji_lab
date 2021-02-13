import React, { Component } from 'react'
import Display from "./display"
export default class main extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            items: []
        };
    }

    componentDidMount() {
        fetch("https://emoji-api.com/emojis?access_key=ce7864aa99f1a90113dc34f9bf845f4ef67ca44b")
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    data: data
                });
            });
    }
    handleChange = (e) => {
        let input = e.target.value
        let itemlist = this.state.data.filter(items => items.unicodeName.includes(input))
        this.setState({ items: itemlist })

    }
    handleCopy = () => {

    }
    render() {
        return (
            <div>
                <input type="text" name="search" id="search" onChange={this.handleChange} />
                <Display data={this.state.items} onClick={this.handleCopy} />
            </div>
        )
    }
}
