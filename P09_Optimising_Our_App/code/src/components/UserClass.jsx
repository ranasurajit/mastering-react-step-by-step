import React from 'react';
import { GITHUB_USER_API_URL } from '../utils/constants';

class UserClass extends React.Component {
    intervalCount = 0;

    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            userInfo: {
                name: 'Dummy User',
                location: 'No location fetched',
                bio: '',
                avatar_url: '',
                twitter_username: ''
            }
        };
        console.log('Child Constructor');
    }

    async componentDidMount() {
        console.log('Child componentDidMount');
        const data = await fetch(GITHUB_USER_API_URL);
        const json = await data.json();
        this.setState({
            userInfo: json
        });
        this.timer = setInterval(() => {
            console.log('Interval Running', this.intervalCount++);
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Child componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('Child componentWillUnmount - called when user changes route or component is no longer in DOM');
        // clear timer
        clearInterval(this.timer);
    }

    render() {
        console.log('Child Rendered!');
        const { count, userInfo } = this.state;
        return (
            <div className='user-card'>
                {
                    (userInfo?.avatar_url !== '') ? <img src={userInfo?.avatar_url} /> : '<span></span>'
                }
                <h2>Name: {userInfo?.name}</h2>
                <h3>Location: {userInfo?.location}</h3>
                <h4>Contact: @{userInfo?.twitter_username}</h4>
                <h5>Bio: {userInfo?.bio}</h5>
                <h4>Visitors Count : {count}</h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increase Visitors</button>
            </div>
        );
    }
}

export default UserClass;
