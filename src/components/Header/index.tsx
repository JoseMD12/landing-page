import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";

export default function WithSubnavigation() {
    const textLabels = [
        {
            Name: "Home",
            Id: "Home",
        },
        {
            Name: "Quem sou eu?",
            Id: "MoodBoard",
        },
        {
            Name: "Competências",
            Id: "A",
        },
        {
            Name: "Experiência",
            Id: "XP",
        },
        {
            Name: "Contato",
            Id: "Contact",
        },
    ];
    return (
        <Box
            bg={colors["light"]}
            w='50vw'
            h='8vh'
            p={2}
            display={"flex"}
            mt='6vh'
            mx='auto'
            alignItems={"center"}
            color={colors["verde-militar"]}
            borderRadius='20px'
        >
            <Flex w='100%' justifyContent={"space-around"}>
                {textLabels.map((text, index) => (
                    <Button
                        w='fit-content'
                        key={index}
                        alignItems={"center"}
                        justifyContent={"center"}
                        h='5vh'
                        borderRadius='lg'
                        padding={2}
                        bg='transparent'
                        transition={"all ease-in-out 0s"}
                        _hover={{
                            fontWeight: fontWeight["bold"],
                            cursor: "pointer",
                            bg: colors["laranja-principal"],
                        }}
                        fontSize={fontSize["sm"]}
                        color={colors["verde-militar"]}
                        fontWeight={fontWeight["medium"]}
                        onClick={() => {
                            const element = document.querySelector(
                                "#" + text.Id
                            );

                            element?.scrollIntoView({
                                block: "start",
                                behavior: "smooth",
                            });
                        }}
                    >
                        {text.Name}
                    </Button>
                ))}
            </Flex>
        </Box>
    );
}
