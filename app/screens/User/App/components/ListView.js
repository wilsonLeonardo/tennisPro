import React from 'react';
import { FlatList, RefreshControl, View, StyleSheet } from 'react-native';
import { AeroText } from '../../../../components/StyledText';
import IconSVG from '../../../../components/Icon/IconSVG'

export default class ListView extends React.Component {

    render() {
        const { renderItem, data, refreshing, onRefresh, onLoadNext, notFoundLabel } = this.props;

        const notFoundContainer = (
            <View style={styles.container}>
                <IconSVG
                    name="search"
                    size={100}
                    fill="#e2dfdf"
                />
                <View style={styles.text}>
                    <AeroText>{notFoundLabel || 'Nenhum cadastro encontrado'}</AeroText>
                </View>
            </View>
        );

        if (!refreshing && data && data.length === 0) return notFoundContainer;

        return (
            <FlatList
                ListHeaderComponent={() => <View style={{height:30, width: 100}}></View>}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                onEndReached={onLoadNext}
                onEndReachedThreshold={0}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    text: {
        marginTop: 40
    }
});