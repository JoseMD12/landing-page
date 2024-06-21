import { Flex } from "@chakra-ui/react";
import React from "react";
import Polygon from "../../components/Skills/Polygon";
export default function Skills() {
    return (
        <Flex
            pt='20vh'
            textAlign='center'
            h='fit-content'
            w='full'
            flexDirection='column'
            gap='16'
        >
            <Polygon />
        </Flex>
    );
}
