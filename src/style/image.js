import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';

const image = StyleSheet.create({
    homeLogo: {
        width: 60,
        height: 60,
    },
    mainLogo: {
        width: 180,
        height: 50,
    },
    titleScreenImage: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        margin: 15
    },
    productImage: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
    titleScreenImageSubPage: {
        marginTop: 5,
        width: 40,
        resizeMode: 'contain',
        height: 40,
    },
    mainNavigationIcon: {
        width: 40,
        height: 30
    },
    backgroundImage: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    importIconSearch: {
        width: 30,
        height: 30,
        alignItems: 'center',
        marginLeft: 10
    },
    importIconBarcode: {
        width: 80,
        height: 80,
        alignItems: 'center',
        resizeMode: 'contain',
        marginLeft: 10,
        marginBottom:15
    },
    importIconSearchDark: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    imageLoading: {
        width: 300,
        height: 95,
        resizeMode: 'contain'
    },
    imagePos: {
        width: 200,
        height: 200
    },
    imageCup: {
        width: 80,
        height: 200
    },
    imageUrl: {
        width: 250,
        height: 18
    },
    imageToggle: {
        width: 15,
        height: 10
    },
    mainMenuIcon: {
        width: 35,
        height: 25,
        marginRight: 5,
        resizeMode: 'contain'
    },
    mainLogoIcon: {
        width: 70,
        height: 25,
        marginRight: 5,
        resizeMode: 'contain'
    },
    backIcon: {
        width: 25,
        height: 15,
        marginRight: 5,
        resizeMode: 'contain'
    }
});
export default image;