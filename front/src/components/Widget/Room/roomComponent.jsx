import React from 'react'
import './room.css'

const Room = (props) => {
    let room = props.room;
    let status;
    if (room.reservState === 'NAN') {
        status = '/assets/free.svg';
    }

    const getStyled = (props) => {
        if (props.reserveState === 'NAN') {
            return 'green'
        } else if (props.reserveState === 'RES') {
            return 'orange'
        } else {
            return 'red'
        }
    };

    const getImg = (props) => {
        if (props.reserveState === 'NAN') {
            return '/assets/free.svg'
        } else if (props.reserveState === 'RES') {
            return '/assets/taken.svg'
        } else {
            return '/assets/sleepy.svg'
        }
    };

    return (
        <div id={'room_card_container'}>
            <p id={'room_name'}>{room.roomName}</p>
            <img className={'room_status'} src={getImg(room)}/>
            <div className={'room_id'}>
                <li style={{color: getStyled(room)}}><span style={{color: 'black'}}>{room.roomId}</span></li>
            </div>
        </div>
    );
};

export default Room;
