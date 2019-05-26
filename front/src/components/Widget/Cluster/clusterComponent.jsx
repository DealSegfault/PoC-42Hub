import React from 'react'
import Room from '../Room/roomComponent'
import './cluster.css'

const Cluster = (props) => {
    let student = props.student;
    console.log(props.student);
    let table = [];

    const fillCol = (student) => {
        let col = [];
        for (let i = 0; i < 10; i++) {
            col[i] = fillRow(student.slice(i * 10, i * 10 + 10));
        }
        return col;
    };

    const fillRow = (student) => {
        let rows = [];
        for (let i = 0; i < 10; i++) {
            rows[i] = student[i];
        }
        return rows;
    };

    const getColor = (props) => {
        if (props.alertState === 'RAS') {
            return 'whitesmoke';
        } else if (props.alertState === 'MOVEMENT') {
            return 'orange';
        } else {
            return 'lightcoral';
        }
    };

    const renderTable = (table) => (
        table.map((row, i) => (
            <tr key={i} id={'line_container'}>
                {row.map((room, i) => (
                    <td key={i} className={'case_container'} style={{backgroundColor: getColor(room)}}><Room room={room}/></td>
                ))}
            </tr>
        ))
    );

    if (student) {
        table = fillCol(student);
        return (
            <table id={'table_container'}>
                <tbody>
                {table && renderTable(table)}
                </tbody>
            </table>
        );
    } else {
        return (
            <div/>
        );
    }
};

export default Cluster;
