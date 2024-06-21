import React from "react";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { colors } from "../../constants/colors";

export default function ScrollUpButton() {
    return (
        <Flex position='fixed' bottom='4' right='4' zIndex='1000'>
            <Button
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                borderRadius={"full"}
                w='12'
                bg={colors["verde-militar"]}
                color='light'
                size='lg'
                _hover={{
                    bg: colors["laranja-principal"],
                    transform: "scale(1.2)",
                }}
            >
                <ArrowUpIcon w={6} h={6} />
            </Button>
        </Flex>
    );
}
