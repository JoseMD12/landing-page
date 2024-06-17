import React from "react";
import { Box, Image, Text, Flex, Button, Heading } from "@chakra-ui/react";

export interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
    >
      <Box p="6">
        
      </Box>
    </Box>
  );
};