import React, { Component } from 'react';
import Masonry from '../Masonry/Masonry';
import { connect } from 'react-redux';
import { getAllPhotos } from '../../ducks/reducer'
import Footer from '../../components/Footer/Footer';
import '../Gallery/Gallery.css'


const Tile = ({ src }) => {
    return (
        <div className='tile'>
            <img className='hi' src={src} alt='hair' />
        </div>
    )
}

class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            brakePoints: [350, 500, 750]
        }
    }

    componentDidMount() {
        this.props.getAllPhotos('photos')
    }

    render() {
        const mason = this.props.photos.map((pic, id) => {
            return (
                <Tile src={pic.photo_url} key={id} alt='hair' />
            )
        })
        return (
            <div className='Gallery'>
             <div className='masonry-container'>
                <Masonry brakePoints={this.state.brakePoints}>
                    {mason}
                </Masonry>
                </div>
                <div>
                    <Footer />
                </div>
                
            </div>
           
        )
    }
}

let outputActions = {
    getAllPhotos
}

function mapStateToProps(state) {
    return { photos: state.photos }
}

export default connect(mapStateToProps, outputActions)(Gallery);