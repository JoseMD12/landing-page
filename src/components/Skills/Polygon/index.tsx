import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import LargeShape from "../../../assets/Skills/lg-shape.svg";
export default function Polygon() {
    return (
        <Flex pl='8vw'>
            <Image w='40vw' src={LargeShape} alt='Polygon' />
        </Flex>
    );
}
