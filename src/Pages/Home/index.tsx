import React from "react";
import { Circle, Flex, Image, Text } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";
import Shrek from "../../assets/shrek.png";
import Header from "../../components/Header";

export default function Home() {
    return (
        <Flex flexDirection='column'>
            <Header />

            <Flex w='full' pt='5vh' id='Home'>
                <Flex pt='14vh' pl='10vw' flexDirection='column' w='50%'>
                    <Text
                        pb='2vh'
                        fontSize={fontSize["md"]}
                        color={colors["light"]}
                        fontWeight={fontWeight["light"]}
                    >
                        Olá, sou
                    </Text>

                    <Text
                        fontSize={fontSize["xl"]}
                        color={colors["light"]}
                        fontWeight={fontWeight["light"]}
                    >
                        José Dotta
                    </Text>

                    <Text
                        fontSize={fontSize["xl"]}
                        color={colors["laranja-principal"]}
                        fontWeight={fontWeight["bold"]}
                        maxW='30vw'
                        lineHeight='1.2'
                    >
                        Desenvolvedor de Software
                    </Text>

                    <Text
                        pt='4vh'
                        fontSize={fontSize["md"]}
                        color={colors["light"]}
                        fontWeight={fontWeight["light"]}
                        maxW='30vw'
                    >
                        Esse é o meu portfólio
                    </Text>
                </Flex>

                <Flex pt='5vh' pl='10vw' w='50%'>
                    <Circle bg={colors["laranja-principal"]}>
                        <Image src={Shrek} alt='Shrek' w='30vw' />
                    </Circle>
                </Flex>
            </Flex>
        </Flex>
    );
}
