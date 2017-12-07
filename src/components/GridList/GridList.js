import { GridList, GridTile, IconButton } from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import React from 'react';

const styles = {
    root: {
      display: 'flex',
      flexwrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      display: 'flex',
      flexWrap: 'wrap',
      overflowX: 'auto',
    },
    titleStyle: {
      color: 'rgb( 0, 188, 212 )',
    },
  };

  const tilesData = [
    {
      img: 'http://www.material-ui.com/images/grid-list/morning-819362_640.jpg',
      title: 'Breakfast',
      author: 'jill111',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/honey-823614_640.jpg',
      title: 'Tasty burger',
      author: 'pashminu',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/vegetables-790022_640.jpg',
      title: 'Camera',
      author: 'Danson67',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/hats-829509_640.jpg',
      title: 'Morning',
      author: 'fancycrave1',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/water-plant-821293_640.jpg',
      title: 'Hats',
      author: 'Hans',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg',
      title: 'Honey',
      author: 'fancycravel',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/burger-827309_640.jpg',
      title: 'Vegetables',
      author: 'jill111',
    },
    {
      img: 'http://www.material-ui.com/images/grid-list/camera-813814_640.jpg',
      title: 'Water plant',
      author: 'BkrmadtyaKarki',
    }
  ]

  const GridListEx = () => (
    <div style={styles.root}>
      <GridList style={styles.gridList} cols={2.2}>
        {tilesData.map((tile) => (
          <GridTile
            key={tile.title}
            title={tile.title}
            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
            titleStyle={styles.titleStyle}
            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
            rows={ 1 }
          >
            <img src={tile.img} />
          </GridTile>
        ))}
      </GridList>
    </div>
  );
  
  export default GridListEx;