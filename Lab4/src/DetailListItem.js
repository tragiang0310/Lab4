import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Divider, List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DetailListItem = ({icon, title, description}) => {
    return (
        <View>
            <List.Item
                style={{padding: 20}}
                title={title}
                titleStyle={{color: '#000000', fontSize: 20}}
                description={description}
                descriptionStyle={{color: '#3333ff', fontSize: 16}}
                left={props => <Icon name={icon} size={30} color="#000000" />}
            />
            <Divider />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        paddingLeft: 50,
        marginTop: 0,
    },
    detailInfo: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomColor: 'grey',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    
    details: {
        justifyContent: 'center',
        flex: 1,
        marginLeft: 25,
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        color: 'blue',
        fontSize: 14,
        marginTop: 4
    }
})
export default DetailListItem;