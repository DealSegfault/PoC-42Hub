import React from 'react'
import './room.css'

const Room = (props) => {
    let room = props.room;
    let status;
    if (room.reservState === 'NAN') {
        status = '/assets/furniture.svg';
    }
    return (
        <div id={'room_card_container'}>
            <p id={'room_name'}>{room.roomName}</p>
            <img className={'room_status'} src={status}/>
            <p id={'room_id'}>{room.roomId}</p>
        </div>
    );
};

export default Room;
