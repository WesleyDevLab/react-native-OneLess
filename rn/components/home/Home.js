/**
 * Created by mifind on 2016/12/27.
 */
import React, {Component} from 'react';
import{
    View,
    Text
}from 'react-native';
import TabBar from '../common/tab/TabBar'
import TitleBar from '../common/TitleBar'
import HomeRoute from  './HomeRoute'
var StyleSheet = require('../../common/commonStyleSheet')
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    selectedItem(index) {
        this.route.route(index)
    }

    render() {
        return (
            <View style={styles.container}>
                <TitleBar
                    position={this.state.selectedIndex}
                />
                <HomeRoute ref={(route)=>(this.route=route)}/>
                <TabBar defaultPage={this.state.selectedIndex}
                        onItemSelected={(index)=>this.selectedItem(index)}>
                    <TabBar.Item
                        icon={require('../../images/home.png')}
                        selectedIcon={require('../../images/home_active.png')}
                    >
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/reading.png')}
                        selectedIcon={require('../../images/reading_active.png')}
                    >
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/music.png')}
                        selectedIcon={require('../../images/music_active.png')}
                    >
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('../../images/movie.png')}
                        selectedIcon={require('../../images/movie_active.png')}
                    >
                    </TabBar.Item>
                </TabBar>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});