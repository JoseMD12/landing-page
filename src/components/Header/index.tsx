import { Box, Flex, Text } from "@chakra-ui/react";
import { colors } from "../../constants/colors";
import { fontSize, fontWeight } from "../../constants/fontSize";
import { doc } from "prettier";

export default function WithSubnavigation() {
    const textLabels = [
        "Home",
        "Quem sou eu?",
        "Competências",
        "Experiência",
        "Contato",
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
                    <Flex
                        w='fit-content'
                        alignItems={"center"}
                        justifyContent={"center"}
                        h='5vh'
                        borderRadius='lg'
                        padding={2}
                        _hover={{
                            fontWeight: fontWeight["semiBold"],
                            cursor: "pointer",
                            bg: colors["laranja-principal"],
                        }}
                    >
                        <Text
                            key={index}
                            fontSize={fontSize["sm"]}
                            onClick={() => {
                                console.log(text);
                            }}
                        >
                            {text}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Box>
    );
}
