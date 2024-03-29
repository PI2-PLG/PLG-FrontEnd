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
            notifications: false,
            profile: false,
        }
    }
    componentDidMount(){
        const { screen } = this.props;

        switch(screen) {
            case screens.HOME:
                this.setState({ home: true, graphics: false, notifications: false, profile: false });
                break;
            case screens.GRAPHICS:
                this.setState({ home: false, graphics: true, notifications: false, profile: false});
                break;
            case screens.NOTIFICATIONS:
                this.setState({ home: false, graphics: false, notifications: true, profile: false });
                break;
            case screens.PROFILE:
                this.setState({ home: false, graphics: false, notifications: false, profile: true });
                break;
            default:
                this.setState({ home: false, graphics: false, notifications: false, profile: false });
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        const { home, graphics, notifications, profile } = this.state;

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
                        <Icon active={graphics} type="MaterialCommunityIcons" name="chart-bar" style={graphics ? styles.actived : styles.disabled} />
                        <Text style={[styles.text, graphics ? styles.actived : styles.disabled]}>Gráficos</Text>
                    </Button>
                    <Button vertical
                        active={notifications}
                        style={notifications ? styles.activedButton : null}
                        onPress={() => navigate(screens.NOTIFICATIONS)}>
                        <Icon active={notifications} name="ios-notifications" style={notifications ? styles.actived : styles.disabled} />
                        <Text style={[styles.text, notifications ? styles.actived : styles.disabled]}>Alertas</Text>
                    </Button>
                    <Button vertical
                        active={profile}
                        style={profile ? styles.activedButton : null}
                        onPress={() => navigate(screens.PROFILE)}>
                        <Icon active={profile} type="FontAwesome" name="user" style={profile ? styles.actived : styles.disabled} />
                        <Text style={[styles.text, profile ? styles.actived : styles.disabled]}>Conta</Text>
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
    notifications: screens.NOTIFICATIONS,
    profile: screens.PROFILE,
}

const styles = StyleSheet.create({
    footerBar: {
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderTopColor: '#F5F5F5'
    },
    text: { fontSize: 10 },
    activedButton: { backgroundColor: '#FFF' },
    actived: { color: '#DD6E42' },
    disabled: { color: "#D3D3D3" }
});