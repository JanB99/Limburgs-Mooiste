import React, { useState } from 'react';
import { globalStyles, Colors } from '../../constants';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { colors, Icon } from 'react-native-elements';
import Animated, { useTransition, Easing } from 'react-native-reanimated';

const achievements = props => {
    const [open, setOpen] = useState(false);

    // const transition = useTransition(
    //     open,
    //     open ? 0 : 1,
    //     open ? 1 : 0,
    //     400,
    //     Easing.inOut(Easing.ease)
    // );

    // const height = bInterpolate(transition, 0, badgesMap.items.length * 54);
    // const bototmRadius = bInterpolate(transition, 8, 0);

    const [category, setCategory] = new useState('Snelheid');

    const categoryMap = [
        {
            id: 1,
            Naam: 'Snelheid',
        },
        {
            id: 2,
            Naam: 'Afstand',
        },
        {
            id: 3,
            Naam: 'Shares',
        },
        // {
        //     id: 4,
        //     Naam: 'Sessies',
        // }
    ]

    const badgesMap = [
        {
            id: 1,
            categorie: 'Snelheid',
            Naam: 'Snelheids Duivel',
            Beschrijving: 'Voltooi een trainingsschema 10% sneller dan de streeftijd!',
        },
        {
            id: 2,
            categorie: 'Afstand',
            Naam: 'Afstands maniak',
            Beschrijving: 'Fiets de afstand van het limburgs Mooiste evenement!',
        },
        {
            id: 3,
            categorie: 'Shares',
            Naam: 'Deler',
            Beschrijving: 'Deel meer dan 3 verschillende resultaten met uw vrienden!',
        },
        {
            id: 4,
            categorie: 'Shares',
            Naam: 'Deler II',
            Beschrijving: 'Deel meer dan 5 verschillende resultaten met uw vrienden!',
        },
        {
            id: 5,
            categorie: 'Shares',
            Naam: 'Deler III',
            Beschrijving: 'Deel meer dan 8 verschillende resultaten met uw vrienden!',
        },
        {
            id: 6,
            categorie: 'Shares',
            Naam: 'Deler IV',
            Beschrijving: 'Deel meer dan 15 verschillende resultaten met uw vrienden!',
        },
        {
            id: 7,
            categorie: 'Shares',
            Naam: 'Mr WorldWide',
            Beschrijving: 'Deel meer dan 20 verschillende resultaten met uw vrienden!',
        },
        {
            id: 8,
            categorie: 'Shares',
            Naam: 'Mr WorldWide II',
            Beschrijving: 'Deel meer dan 50 verschillende resultaten met uw vrienden!',
        },
    ]


    return (
        <View style={styles.container}>
            <View style={styles.sectionHead}>
                {
                    categoryMap.map(
                        item => {
                            if (category == item.Naam) {
                                return (
                                    <TouchableOpacity key={item.id}
                                        style={styles.sectionHeadButtonSelect}
                                        onPress={() => { setCategory(item.Naam) }}>
                                        <Text style={globalStyles.fontStyle}>{item.Naam}</Text>
                                    </TouchableOpacity>
                                )
                            } else {
                                return (
                                    <TouchableOpacity key={item.id}
                                        style={styles.sectionHeadButton}
                                        onPress={() => { setCategory(item.Naam) }}>
                                        <Text>{item.Naam}</Text>
                                    </TouchableOpacity>
                                )
                            }
                        }
                    )
                }
            </View>
            <ScrollView style={styles.sectionContent}>
                {
                    badgesMap.map(
                        item => {
                            if (category == item.categorie) {
                                return (
                                    <Animated.View>

                                        <TouchableOpacity key={item.id} style={styles.badge}
                                            onPress={() => setOpen(!open)} >
                                            <Text> {item.Naam} </Text>
                                            <Icon name='chevron-down'
                                                type='evilicon'
                                                color='#517fa4'
                                            />
                                        </TouchableOpacity>
                                    </Animated.View>
                                )
                            }
                        }
                    )
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        flex: 1,
    },

    sectionHead: {
        flexDirection: "row",
        backgroundColor: Colors.tertiary,
        flex: 0.20,
    },
    sectionContent: {
        backgroundColor: colors.tertiary,
        flex: 1,
    },

    sectionHeadButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 8,
        margin: 3,
        flex: 1,
    },
    sectionHeadButtonSelect: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#fff',
        marginTop: 8,
        marginHorizontal: 5,
        flex: 1,
    },

    badge: {
        borderBottomColor: Colors.primary,
        borderBottomWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 10,
        padding: 10,
    }
});

export default achievements