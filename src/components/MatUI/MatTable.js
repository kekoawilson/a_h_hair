import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';


const tableData = [
    {
        service: "Women's Haircut & Style",
        price: '$25+'
    },
    
    {
        service: "Men's Haircut",
        price: '$15'
    },
    
    {
        service: "Children's Haircut",
        price: '$15'
    },
    
    {
        service: "Men's Color",
        price: '$25'
    },
    
    {
        service: "Updo",
        price: '$30'
    },
    
    {
        service: "Bridal Updo",
        price: '$50'
    },
    
    {
        service: "All Over Color",
        price: '$60+'
    },
    
    {
        service: "Root Touch Up",
        price: '$50+'
    },
    
    {
        service: "Bleach and Tone",
        price: '$80+'
    },
    
    {
        service: "Partial Foil Weave",
        price: '$65+'
    },
    
    {
        service: "Full Foil Weave",
        price: '$85+'
    },
    
    {
        service: "Balayage",
        price: '$90+'
    },
    
    {
        service: "Color Correction",
        price: '$90+'
    },
    
    {
        service: "Olaplex",
        price: 'Add $15'
    },
    
    {
        service: "- Long Hair Extra -",
        price: ''
    },
    
]

class MatTable extends Component {
    constructor() {
        super()

    }

  render() {
    return (
        <Table 
        selectable={ true }
        multiSelectable={ true }
        // height='300px'
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
          { tableData.map( ( row, i ) => (
            <TableRow key={ i }>
              <TableRowColumn>{ row.service }</TableRowColumn>
              <TableRowColumn>{ row.price }</TableRowColumn>
            </TableRow>
            ) ) }
        </TableBody>
        </Table>
    );
  }
}

export default MatTable;