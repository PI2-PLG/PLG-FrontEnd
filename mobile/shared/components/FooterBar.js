import React, { Component } from 'react';
import screens from '../../navigation/screens';
import { StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text, Container} from 'native-base';

class FooterBar extends Component{

    constructor(props) {
        super(props);

        this.props = props;

        this.state = {
            home: true,
            graphics: false,
        }
    }
    componentDidMount(){
        const { screen } = this.props;

        switch(screen) {
            case screens.HOME:
                this.setState({ home: true, graphics: false });
                break;
            case screens.GRAPHICS:
                this.setState({ home: false, graphics: true });
                break;
            default:
                this.setState({ home: false, graphics: false });
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        const { home, graphics } = this.state;

        return(
            <Footer>
                <FooterTab style={styles.footerBar}>
                    <Button vertical
                        active={home}
                        style={home ? styles.activedButton : null}
                        onPress={() => navigate(screens.HOME)}>
                        <Icon active={home} name="ios-home" style={home ? styles.actived : styles.disabled} />
                        <Text style={[styles.text, home ? styles.actived : styles.disabled]}>Início</Text>
                    </Button>
                    <Button vertical
                        active={graphics}
                        style={graphics ? styles.activedButton : null}
                        onPress={() => navigate(screens.GRAPHICS)}>
                        <Icon active={graphics} name="ios-list-box" style={graphics ? styles.actived : styles.disabled} />
                        <Text style={[styles.text, graphics ? styles.actived : styles.disabled]}>Gráficos</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}

export default withNavigation(FooterBar);

export const tabScreens = {
    home: screens.HOME,
    graphics: screens.GRAPHICS,
}

const styles = StyleSheet.create({
    footerBar: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5'
    },
    text: { fontSize: 10 },
    activedButton: { backgroundColor: '#FFF' },
    actived: { color: 'red' },
    disabled: { color: "#D3D3D3" }
});