import React from "react";
import { Flex } from "@chakra-ui/react";
import { colors } from "./constants/colors";
import Home from "./Pages/Home";
import MoodBoard from "./Pages/MoodBoard";
import ScrollUpButton from "./components/ScrollUpButton";
import Skills from "./Pages/Skills";

export default function App() {
    return (
        <Flex
            minH='100%'
            w='100%'
            bg={colors["verde-militar"]}
            color={colors["light"]}
            flexDirection='column'
            overflowX={"hidden"}
        >
            <ScrollUpButton />
            <Home />
            <Flex
                flexDirection='column'
                bgGradient={`linear-gradient(180deg, rgba(58,90,64,1) 0%, rgba(58,90,64,1) 3%, rgba(163,177,138,1) 20%, rgba(163,177,138,1) 31%, rgba(221,161,94,1) 42%, rgba(221,161,94,1) 73%, rgba(255,138,0,1) 97%);`}
                h='8500px'
            >
                <MoodBoard />
                <Skills />
            </Flex>
        </Flex>
    );
}
