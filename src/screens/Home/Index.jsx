import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../Components/Button/Index';
import { Container, InputText, Title, ResultText } from './styles'


export default function Home() {

    const [height, setHeight] = useState(0)
    const [weight, setWeight] = useState(0)
    const [resultImc, setResultImc] = useState(0)
    const [resultText, setResultText] = useState("")

    function handleCalculateImc() {
        const calculateImc = (weight / (height * height)).toFixed(2)

        if (height === 0 || weight === 0) {
            setResultText("Informe altura e peso")
            setResultImc(0)
        }
        if (calculateImc < 18.5) {
            setResultImc(calculateImc)
            setResultText("Muito abaixo do peso 😕")
        }
        else if (calculateImc > 18.5 && calculateImc < 24.9) {
            setResultImc(calculateImc)
            setResultText("Seu peso esta normal 👏")
        }
        else if (calculateImc >= 25 && calculateImc <= 29.9) {
            setResultImc(calculateImc)
            setResultText("Sobrepeso 😬")
        }
        else if (calculateImc >= 30 && calculateImc <= 39.9) {
            setResultImc(calculateImc)
            setResultText("Obesidade 😧")
        }
        else if (calculateImc > 40) {
            setResultImc(calculateImc)
            setResultText("Obesidade grave ☠️")
        }
    }
    return (
        <Container>

            <Title> Calculadora imc </Title>
            <StatusBar style="auto" />

            <InputText
                placeholder='Altura (ex: 1,60)'
                placeholderTextColor="#999"
                keyboardType="numeric"
                onChangeText={setHeight}
            />
            <InputText
                placeholder='Peso (ex: 60,9)'
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


