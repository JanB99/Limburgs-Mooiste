import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { globalStyles, Colors } from '../../constants';
import NextTraining from './nextTraining';
import Motivation from './motivation';
import FeedListItem from './feedListItem';

import firebase from '../../api/firebase';

const DashboardScreen = () => {

    const [refreshState, setRefreshState] = useState(false);

    const feedList = [
        {
            id: 1,
            info: 'debug message 1',
        },
        {
            id: 2,
            info: 'debug message 1',
        }
        ,
        {
            id: 3,
            info: 'debug message 1',
        }
        ,
        {
            id: 4,
            info: 'debug message 1',
        }
    ]

    const handleRefresh = () =>{
        setRefreshState(false);
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <View style={[{backgroundColor: Colors.secondary},styles.headerNextTraining]}>
                    <Text style={[{color: Colors.tertiary}, globalStyles.headerText ]}>Volgende Training</Text>
                </View>
                <NextTraining/>
                <Motivation/>
                <View style={styles.feedHeader}>
                    <Text style={styles.buttonText}>Your Feed</Text>
                </View>
                <View style={{
                height: 1,
                marginLeft: '2%',
                marginRight: "2%",
                backgroundColor: "#CED0CE",
                justifyContent: 'center'
              }}
            />
            </View>
        )
    }

    const renderSeparator = () => {
        return (
            <View style={{
                height: 1,
                marginLeft: '2%',
                marginRight: "2%",
                backgroundColor: "#CED0CE",
                justifyContent: 'center'
              }}
            />
        )
    }

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={feedList}
                keyExtractor={(data) => data.id.toString()}
                ListHeaderComponent={renderHeader}
                ItemSeparatorComponent={renderSeparator}
                refreshing={refreshState}
                onRefresh={handleRefresh}
                keyExtractor={(data) => data.id.toString()}
                renderItem={(data) => <FeedListItem title={data.item.info}/>}
            />
        </View>
        
    )
}


const styles = StyleSheet.create({
    headerNextTraining: {
        padding: '1%',
        marginLeft: '2%',
        marginRight: "2%",
        marginTop: '2%',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        alignItems: 'center'
    },
    feedHeader: {
        alignItems: 'center',
        marginTop: 10,
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 10,
        backgroundColor: Colors.secondary,
        marginLeft: '2%',
        marginRight: "2%",
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26
    },
    mainContainer: {
        flex: 1
    },
    headerContainer: {
        flex: 5
    },
    buttonText: {
        color: Colors.tertiary,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default DashboardScreen