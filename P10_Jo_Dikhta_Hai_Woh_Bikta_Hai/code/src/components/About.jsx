import { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {
    constructor(props) {
        super(props);
        console.log('Parent Constructor');
    }

    componentDidMount() {
        console.log('Parent componentDidMount');
    }

    render() {
        console.log('Parent Rendered');
        return (
            <div>
                <h1>About</h1>
                <UserClass name='Surajit Rana (RCC)' location='Hyderabad' />
            </div>
        );
    }
}

export default About;
