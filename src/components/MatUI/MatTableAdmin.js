import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAppts } from '../../ducks/reducer';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class MatTableAdmin extends Component {
    
    componentDidMount() {
        this.props.getAppts()
    }
    
    render() {
        return (
            <Table 
            selectable={ false }
            multiSelectable={ false }
            showCheckboxes={ false }
            fixedHeader={ true }
            // onRowSelection={ rows => this.props.selectRow( rows ) }
            >
            <TableHeader
            showCheckboxes={ false }
            >
            <TableRow >
            <TableHeaderColumn >Name</TableHeaderColumn>
            <TableHeaderColumn >Date</TableHeaderColumn>
            <TableHeaderColumn >Time</TableHeaderColumn>
            <TableHeaderColumn >Service</TableHeaderColumn>
            <TableHeaderColumn >Email</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody 
            stripedRows={ true }
            deselectOnClickaway={ false }
            showRowHover={ true }
            >
            { this.props.appointments.map( ( row, i ) => {
                return ( 
                    <TableRow 
                    key={ i } 
                    hoverable={ true }
                    >
                    <TableRowColumn>{ row.user_name }</TableRowColumn>
                    <TableRowColumn>{ row.appt_date }</TableRowColumn>
                    <TableRowColumn>{ row.appt_time }</TableRowColumn>
                    <TableRowColumn>{ row.appt_service }</TableRowColumn>
                    <TableRowColumn>{ row.user_email }</TableRowColumn>
                </TableRow>
            ) } ) }
        </TableBody>
        </Table>
    );
}
}

let outputAction = {
    getAppts
}

function mapStateToProps( state ) {
    return {
        appointments: state.appointments
    }
}

export default connect( mapStateToProps, outputAction )( MatTableAdmin );