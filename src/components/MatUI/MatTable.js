import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllServices } from '../../ducks/reducer';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


class MatTable extends Component {
    
    componentDidMount() {
        this.props.getAllServices()
    }
    
    render() {
        return (
            <Table 
            selectable={ true }
            multiSelectable={ true }
            showCheckboxes={ true }
            fixedHeader={ true }>
            <TableHeader
            showCheckboxes={ true }
            >
            <TableRow >
            <TableHeaderColumn >Service</TableHeaderColumn>
            <TableHeaderColumn >Price</TableHeaderColumn>
            </TableRow>
            </TableHeader>
            <TableBody 
            stripedRows={ true }
            deselectOnClickaway={ true }
            >
            { this.props.servicesList.map( ( row, i ) => {
                return ( 
                    <TableRow key={ i }>
                    <TableRowColumn>{ row.services }</TableRowColumn>
                    <TableRowColumn>{ row.price }</TableRowColumn>
                </TableRow>
            ) } ) }
        </TableBody>
        </Table>
    );
}
}

let outputAction = {
    getAllServices
}

function mapStateToProps( state ) {
    return {
        servicesList: state.servicesList
    }
}

export default connect( mapStateToProps, outputAction )( MatTable );




    // const tableData = [
    //     {
    //         services: "Women's Haircut & Style",
    //         price: '$25+'
    //     },
        
    //     {
    //         services: "Men's Haircut",
    //         price: '$15'
    //     },
        
    //     {
    //         services: "Children's Haircut",
    //         price: '$15'
    //     },
        
    //     {
    //         services: "Men's Color",
    //         price: '$25'
    //     },
        
    //     {
    //         services: "Updo",
    //         price: '$30'
    //     },
        
    //     {
    //         services: "Bridal Updo",
    //         price: '$50'
    //     },
        
    //     {
    //         services: "All Over Color",
    //         price: '$60+'
    //     },
        
    //     {
    //         services: "Root Touch Up",
    //         price: '$50+'
    //     },
        
    //     {
    //         services: "Bleach and Tone",
    //         price: '$80+'
    //     },
        
    //     {
    //         services: "Partial Foil Weave",
    //         price: '$65+'
    //     },
        
    //     {
    //         services: "Full Foil Weave",
    //         price: '$85+'
    //     },
        
    //     {
    //         services: "Balayage",
    //         price: '$90+'
    //     },
        
    //     {
    //         services: "Color Correction",
    //         price: '$90+'
    //     },
        
    //     {
    //         services: "Olaplex",
    //         price: 'Add $15'
    //     },
        
    //     {
    //         services: "- Long Hair Extra -",
    //         price: ''
    //     },
        
    // ]