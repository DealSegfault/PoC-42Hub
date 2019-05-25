import React from 'react'
import { Header, Icon, Image } from 'semantic-ui-react'

const Profile = () => (
    <div>
        <Header as='h2' icon textAlign='center'>
            <Icon name='users' circular />
            <Header.Content>Friends</Header.Content>
        </Header>
        <Image centered size='large' src='/assets/logo-42.png' />
    </div>
);

export default Profile