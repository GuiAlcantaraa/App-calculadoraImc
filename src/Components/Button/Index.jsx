import React from 'react';
import { TouchableOpacity } from 'react-native'
import { Container, Title } from './styles'



export function Button({ onPress }) {
    return (
        <Container
            activeOpacity={.7}
            onPress={onPress}
        >
            <Title>Calcular</Title>
        </Container>

    )
}

