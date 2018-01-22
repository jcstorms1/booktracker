import React from 'react';
import { Sidebar, Image, Menu, Segment, Icon, Header } from 'semantic-ui-react';


const Sidebar2 = props => {
    return(
        <Sidebar.Pushable as={Segment}>
            <Sidebar 
            as={Menu} 
            animation='push' 
            width='thin' 
            visible={props.visible} 
            icon='labeled' 
            vertical 
            inverted>
            <Menu.Item name='home'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
                <Icon name='gamepad' />
                Games
            </Menu.Item>
            <Menu.Item name='camera'>
                <Icon name='camera' />
                Channels
            </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    )
}

export default Sidebar2;