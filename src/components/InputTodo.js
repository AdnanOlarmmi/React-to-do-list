/* eslint-disable */
import React from "react";

class InputTodo extends React.Component {

    state = {
        title: ""
    }

    onChange = e => {
       this.setState({
        title: e.target.value
       })
    }

    render() {
        return(<form>
        <input type="text" placeholder="Add Todo..." onChange={this.onChange} value={this.state.title}/>
        <button>Submit</button>
    </form>)
    }
    
}

export default InputTodo;