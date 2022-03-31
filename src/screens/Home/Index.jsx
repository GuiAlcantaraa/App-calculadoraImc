import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../Components/Button/Index';
import { Container, InputText, Title, ResultText } from './styles'
import { Text } from 'react-native';

export default function Home() {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [resultImc, setResultImc] = useState(0)
    const [resultText, setResultText] = useState("")

    function handleCalculateImc() {
        let calculateImc = (weight / (height * height)).toFixed(2)
        setResultImc(calculateImc)

        if (resultImc < 18.5) setResultText("Muito abaixo do peso")
        else if (resultImc > 18.5 && resultImc < 24.9) setResultText("Seu peso esta normal")
        else if (resultImc >= 25 && resultImc <= 29.9) setResultText("Sobrepeso")
        else if (resultImc >= 30 && resultImc <= 39.9) setResultText("Obesidade")
        else if (resultImc > 40) setResultText("Obesidade grave")
    }

    return (
        <Container>

            <Title> Calculadora imc </Title>
            <StatusBar style="auto" />

            <InputText
                placeholder='Digite a altura'
                placeholderTextColor="#999"
                keyboardType="numeric"
                onChangeText={setHeight}
            />

            <InputText
                placeholder='Digite o peso'
                placeholderTextColor="#999"
                keyboardType="numeric"
                onChangeText={setWeight}
            />

            <Button onPress={handleCalculateImc} />

            <ResultText >Seu imc é: {resultImc}</ResultText>
            <ResultText >{resultText}</ResultText>

        </Container>

    );
}


