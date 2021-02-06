import axios from 'axios';
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
export const USER_API_BASE_URL = 'https://0da677c91dc6.ngrok.io/api/';
export const USER_CHAT_URL = 'https://0da677c91dc6.ngrok.io/';
class axiosInstance {
    constructor() {
    }

    login(credentials) {
        return axios.post(USER_API_BASE_URL + "auth/login/", credentials);
    }

    // async getuserInfo(){
    //     await AsyncStorage.getItem("userInfo",(err,result) => {
    //         console.log("userinfo",result)
    //     })

    //     return await AsyncStorage.getItem("userInfo")
    // }

    async getToken() {
        console.log(await AsyncStorage.getItem("token"))
        return await AsyncStorage.getItem("token")
    }

    async getUserpk() {
        console.log(await AsyncStorage.getItem("userpk"))
        return await AsyncStorage.getItem("userpk")
    }
    async getusername() {
        console.log(await AsyncStorage.getItem("username"))
        return await AsyncStorage.getItem("username")
    }

    async head() {
        return await {
            headers: { 'Content-Type': 'multipart/form-data ' },
        }
    }
    async getAuthHeader() {
        console.log('phla', await this.getToken())
        console.log("heask", await { headers: { Authorization: 'JWT ' + await this.getToken() } })
        return await { headers: { Authorization: 'JWT ' + await this.getToken() } };
    }

    async logOut() {
        // await AsyncStorage.clear()
        // await AsyncStorage.removeItem("token");
        // await AsyncStorage.removeItem("category");
        // await AsyncStorage.removeItem("userpk");
        // await AsyncStorage.removeItem("username");
        // await AsyncStorage.removeItem("profilePicture");
        // await AsyncStorage.removeItem("firstname");
        // console.log("Category: ",await AsyncStorage.getItem("category"));
        // console.log("token: ",await AsyncStorage.getItem("token"));

        return axios.post(USER_API_BASE_URL + 'auth/logout/');
    }

    async getProducts() {
        return axios.get(USER_API_BASE_URL + 'farmerProducts/')
    }

    async getUserProducts() {
        return axios.get(USER_API_BASE_URL + `farmerProducts/?user=${await this.getUserpk()}`, this.getAuthHeader());
    }

    async getProfile() {
        return await axios.get(USER_API_BASE_URL + 'users/' + await this.getUserpk() + '/', this.getAuthHeader());
    }

    getDetailofProduct(productID) {
        console.log("detailofproduct: ", productID);
        return axios.get(USER_API_BASE_URL + 'farmerProducts/' + productID + '/', this.getAuthHeader())
    }

    async addProduct(credentials) {
        return axios.post(USER_API_BASE_URL + "farmerProducts/", credentials, this.head())
    }
    async deleteproduct(itemid) {
        console.log("detailofproduct: ", itemid);
        console.log("header hai", await this.getAuthHeader())
        return await axios.delete(USER_API_BASE_URL + 'farmerProducts/' + itemid + '/')
    }

    updateproduct(itemid, data) {
        console.log("detailofproduct: ", itemid);
        return axios.put(USER_API_BASE_URL + 'farmerProducts/' + itemid + '/', data, this.head())
    }

    getVendorProducts() {
        return axios.get(USER_API_BASE_URL + `vendorProducts/?username=${this.getusernm()}`, this.getAuthHeader());
    }
    addProductReview(data) {
        console.log('reviewData', data)
        return axios.post(USER_API_BASE_URL + `productReview/`, data)
    }
    postFeedback(data) {
        return axios.post(USER_API_BASE_URL + `feedback/`, data)
    }

    getSensorReadings(){
        return axios.get(USER_CHAT_URL + `Crop/Sensor`)
    }
    AnalyzeSoil(data){
        return axios.post(USER_CHAT_URL + `Crop/Analyze`,data)
    }
    PredictSoil(data){
        return axios.post(USER_CHAT_URL + `Crop/Predict`,data)
    }
    checkoutOrder(data){
        return axios.post(USER_API_BASE_URL + `Checkout/`,data)
    }
}

export default new axiosInstance();
