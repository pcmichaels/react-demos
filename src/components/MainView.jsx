import React, {Component} from 'react';
import DraggableObject from './DraggableObject';

class MainView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dragging: false
        }

        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onMouseDown = (e) => {
        console.log('onMouseDown');
        this.setState({
            dragging: true
        });
    }

    onMouseUp(e)  {
        console.log('onMouseUp');
        this.setState({
            dragging: false
        });
    }

    render() {
        return (
            <div>
                <DraggableObject onMouseUp={this.onMouseUp} onMouseDown={this.onMouseDown} />                

                <p>Dragging: {this.state.dragging ? 'true' : 'false'}</p>
            </div>            
        )
    }

}

export default MainView;
