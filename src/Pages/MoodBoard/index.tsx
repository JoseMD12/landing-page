import React, { useRef } from "react";
import { Flex, Text, Image } from "@chakra-ui/react";
import { fontSize, fontWeight } from "../../constants/fontSize";
import { colors } from "../../constants/colors";
import MoodBoardPng from "../../assets/Mood Board/Frame 1.png";

import {
    motion,
    useAnimation,
    useInView,
    useScroll,
    useTransform,
} from "framer-motion";
import { useEffect } from "react";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function MoodBoard() {
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        if (isInView) {
            scale.onChange((latest) => {
                controls.start({ scale: latest });
            });
        }
    }, [scale, controls, isInView]);

    return (
        <Flex
            pt='20vh'
            textAlign='center'
            h='fit-content'
            w='full'
            flexDirection='column'
            gap='16'
        >
            <Text
                id='MoodBoard'
                fontSize={fontSize["xl"]}
                fontWeight={fontWeight["bold"]}
                color={colors["light"]}
                w='full'
            >
                Quem sou eu?
            </Text>

            <Text
                fontSize={fontSize["md"]}
                fontWeight={fontWeight["regular"]}
                textAlign='justify'
                color={colors["light"]}
                w='58%'
                alignSelf='center'
            >
                Sou um desenvolvedor de software back-end que adora criar e
                desenvolver novos projetos de impacto. Gosto ainda de fazer
                crochê, jogar vídeo games e passear em parques aos domingos.
                <br />
                <br />
                Estou empolgado para fazer novas parceiras que possam
                transformar as vivências de muitas pessoas.
            </Text>

            <MotionFlex
                transition={{ type: "spring", stiffness: 50 }}
                ref={ref}
                animate={controls}
                w='full'
                justifyContent='center'
                pt='5vh'
            >
                <MotionImage w='50%' src={MoodBoardPng} alt='Developer' />
            </MotionFlex>
        </Flex>
    );
}
