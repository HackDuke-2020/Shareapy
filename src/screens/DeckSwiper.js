import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

export default class DeckSwiper1 extends React.Component { 
    render() {
        return (
        <Container>
            <View>
            <DeckSwiper
                dataSource={this.props.dataSource.completed}
                renderItem={item =>
                    <Card style={{ elevation: 3 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={item.profImage} />
                                <Body>
                                    <Text>{item.text}</Text>
                                    <Text note>{item.description}</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image style={{ height: 300, flex: 1 }} source={item.achImage} />
                        </CardItem>
                        <CardItem>
                            <Icon name="heart" style={{ color: '#ED4A6A' }} />
                            <Text>{item.name}</Text>
                        </CardItem>
                    </Card>
                }
                />
            </View>
        </Container>
    );
}
}