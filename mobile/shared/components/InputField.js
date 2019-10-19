import React, { Component } from 'react';
import { Content, Label, Item, Input, Icon, Text } from 'native-base';
import { Row, Col } from 'react-native-easy-grid';

class InputField extends Component {
    render() {
        const { value, onChangeFunction, error, iconName, iconType, placeholder, secure} = this.props;


        return (
            <Content>
            { !error ? 
                <Item>
                    <Input
                        value={value}
                        onChangeText={onChangeFunction}
                        placeholder={placeholder}
                        placeholderTextColor="#BDBDBD"
                        secureTextEntry={secure}
                    >
                    </Input>
                    <Icon 
                        name={iconName}
                        type={iconType}
                        style={{color: '#BDBDBD'}} 
                    />
                </Item> 
            
            :          
                <Item error>
                    <Input
                        value={value}
                        onChangeText={onChangeFunction}
                    >
                    </Input>
                    <Icon 
                        name='times'
                        type='FontAwesome5'
                        style={{color: 'red'}} 
                    />
                </Item> 
            }
            </Content>
        );

        // return (
        //     <Content padder>
        //         <Item stackedLabel>
        //             <Label>{label}</Label>
        //             <Row>
        //                 <Col size={90}>
        //                     <Input
        //                         value={value}
        //                         onChangeText={onChangeFunction}
        //                         {...this.props}
        //                     >
        //                     </Input>
        //                 </Col>
        //                 <Col size={10}>
        //                     {icon && error ? <Icon name="times" type="FontAwesome5" style={{color: 'red', marginTop: 10}} /> : null }
        //                     {icon && (!error && value) ? <Icon name="check" type="FontAwesome5" style={{color: 'green', marginTop: 10}} /> : null }
        //                 </Col>

        //             </Row>
        //         </Item>
        //         <Text style={{color: 'red', paddingLeft: 3}}>{error}</Text>
        //     </Content>
        // );
    }
}

export default InputField;