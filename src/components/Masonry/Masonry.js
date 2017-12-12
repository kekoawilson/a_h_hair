import React, { Component } from 'react'
import '../Masonry/Masonry.css'



class Masonry extends Component {
    constructor( props ) {
        super( props )

        this.state = {
            columns: 1
        }

        this.onResize = this.onResize.bind( this )
    }

    componentDidMount() {
        this.onResize()
        window.addEventListener( 'resize', this.onResize )
    }

    getColumns( w ) {
        return this.props.brakePoints.reduceRight( ( p, c, i ) => {
            return c < w ? p : i
        }, this.props.brakePoints.length ) + 1
    }

    onResize() {
        const columns = this.getColumns( this.refs.Masonry.offsetWidth )
            if ( columns !== this.state.columns ) {
                this.setState( {
                    columns: columns
                } )
            }
    }

    mapChildren() {
        let col = []
        const numOfCol = this.state.columns
        for ( let i = 0; i < numOfCol; i++ ) {
            col.push( [] )
        }
        return this.props.children.reduce( ( p, c, i ) => {
            p[ i % numOfCol ].push( c )
            return p;
        }, col )
    }

    render() {
        return (
            <div className='masonry' ref='Masonry' >
            { this.mapChildren().map( ( col, curIndex ) => {
                return (
                    <div className='column' key={ curIndex }>
                    { col.map( ( child, i ) => {
                        return <div key={ i }>{ child }</div>
                    })}
                    </div>
                )
            })}
            </div>
        )
    }



}

export default Masonry;