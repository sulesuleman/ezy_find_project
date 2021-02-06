import React,{Component} from 'react';
import {Image, View, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './styles';



class ImageOrderItem extends React.Component {
  moreImage = () => {
    const {products} = this.props;
    return (
      <View style={styles.moreView}>
        <Text style={styles.moreText}>{`+${products.length}`}</Text>
      </View>
    );
  };

  imageItem = (url) => {
    return <Image source={url} style={styles.image} />;
  };

  getImages = () => {
    let arrays = [];
    this.props.products.forEach((element, index) => {
      if (index > 2) return;
      arrays.push(this.imageItem(element.image));
    });
    arrays.push(this.moreImage());
    return arrays;
  };

   render() {
    const {containerimage} = styles;

    return (
      <View style={containerimage}>
        <FlatList
          showsVerticalScrollIndicator={false}
          renderItem={({item: rowData, index}) => {
            return rowData;
          }}
          keyExtractor={(item, index) => index}
          columnWrapperStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
          data={this.getImages()}
          numColumns={2}
        />
      </View>
    );
  }
}

export default ImageOrderItem;
