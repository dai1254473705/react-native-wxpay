/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import * as WeChat from 'react-native-wechat';


export default class App extends Component<{}> {
    async _wxPay() {
        try {


            console.log("点击进行支付");
            //判断是否安装了微信
            let isInstallWechat = await WeChat.isWXAppInstalled();

            console.log(isInstallWechat);

            if (!isInstallWechat) {
                console.log('没有安装微信软件，请您安装微信之后再试');
                return;
            }
            //通过接口请求订单信息
            // let data = {
            //     partnerId: '',  // 商家向财付通申请的商家id
            //     prepayId: '',   // 预支付订单
            //     nonceStr: '',   // 随机串，防重发
            //     timeStamp: '',  // 时间戳，防重发
            //     package: '',    // 商家根据财付通文档填写的数据和签名
            //     sign: ''        // 商家根据微信开放平台文档对数据做的签名
            // };
            let data = {"appid":"","noncestr":"IpQIsxAB02VBQfgj","package":"Sign=WXPay","partnerid":"1230636401","prepayid":"wx081016109923499c8830989a2111216444","timestamp":"1531016171","sign":"F21E7FF90AC7D32F7DD1B4FEAF2262D1"}

            let wxpay = await WeChat.pay(data);
            console.log(wxpay);
        } catch (e) {
            console.log('-------errr-------');
            //提示用户
            console.log(e);

        }

    }
    componentDidMount() {
        WeChat.registerApp('');
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this._wxPay}>
                    <View style={styles.btn}>
                        <Text style={styles.text}>微信支付</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    btn: {
        width: 200,
        height: 30,
        backgroundColor: "#999",


    },
    text: {
        color: "#fff",
        textAlign: "center",
        lineHeight: 30
    }
});