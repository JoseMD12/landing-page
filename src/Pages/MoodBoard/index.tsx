import { Flex, Text, Image, keyframes } from "@chakra-ui/react";
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
import { useEffect, useRef } from "react";

const MotionFlex = motion(Flex);
const MotionImage = motion(Image);

export default function MoodBoard() {
    const controls = useAnimation();
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 2], [1, 4]);

    useEffect(() => {
        scale.onChange((latest) => {
            controls.start({ scale: latest });
        });
    }, [scale, controls]);

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
                transition={{ type: "spring", stiffness: 100 }}
                animate={controls}
                w='full'
                justifyContent='center'
            >
                <MotionImage w='50vw' src={MoodBoardPng} alt='Developer' />
            </MotionFlex>
        </Flex>
    );
}
