import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  FlatList,
  View,
  TouchableHighlight,
  Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import * as selectors from '../MainReducer/selectors';
import * as actions from '../MainReducer/actions'; 
import {getProductsOfSelectedCategory} from '../../Filters/index';
import { Block, theme, Text, } from "galio-framework";
import styles from '../../Styles/Style';

class ProductsListScreen extends React.Component {
  static navigationOptions = ({ route }) => {
    return {
      title: this.props.category.name
    };
  };

  constructor(props) {
    super(props);
    this.state={
      products:[],
      isLoading:false
    }
  }

  // async componentDidMount() {

  //   let category=this.props.category.name;
  //   console.log("axios se pehle ki category",category)
  //   await axios.get(`https://6d2f293da0c2.ngrok.io/api/farmerProducts/?category=${category}`).then(res=>{
  //     if(res.status === 200){
  //       this.setState({
  //         products: res.data,
  //         isLoading: false 
  //       })
  //       console.log(this.state.products)
  //     }
  //     else{
  //       console.log("data no fetch successfully");
  //     }
  //  })
  //  .then(error => {
  //    console.log(error);
  //  })
  // }

    onPressProduct = item => {
    const {chooseProductItem} = this.props;

    chooseProductItem(item);

    this.props.navigation.navigate('ProductDetail'
    // , { item }
    );
  };

  renderProducts = ({ item }) => (
    <Block>
        <TouchableHighlight underlayColor = 'rgba(73,182,77,1,0.9)' onPress={() => this.onPressProduct(item)}>
          <View style={styles.container}>
            <Image style={styles.photo} source={{ uri: item.productPicture }} />
            <Text 
              style={styles.title}
            >
              {item.productName}</Text>
              <FlatList
                  horizontal
                  style={{marginTop:10}}
                  showsHorizontalScrollIndicator={false}
                  data={[1, 2, 3, 4, 5]}
                  renderItem={({item: rowData}) => {
                    return <AntDesign name="star" color="#ebe300" size={20} />;
                  }}
                  keyExtractor={(item, index) => index}
                />
            <Text style={styles.category}>{item.category}</Text>
          </View>
        </TouchableHighlight>  
      </Block>
  );

  render() {
    console.log("category ha",this.props.category)
    console.log("product ha",this.props.product)
    const { navigation } = this.props;
    if(this.state.isLoading){
        return(
          <View flex={1} center style={{backgroundColor:"white",justifyContent:"center"}}>
            <Text style={{color:"black", fontFamily:"montserrat-bold",textAlign:'center'}}>LOADING . . .</Text>
          </View>
        )}
    else{
    return (
      <View >
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={this.props.items}
            renderItem={this.renderProducts}
            keyExtractor={item => `${item.id}`}
          />
        </View>
      );
    }
  }
}
const mapStateToProps = (state) => ({
  items:  getProductsOfSelectedCategory(selectors.getAllProduct(state),selectors.getCategory(state))
  
});

export default connect(mapStateToProps, {...actions})(ProductsListScreen);
