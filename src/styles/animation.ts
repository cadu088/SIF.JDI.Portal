import { Flex, FlexProps, Box, BoxProps, Stack, StackProps } from '@chakra-ui/react';
import { motion } from "framer-motion";

export const animationContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const MotionFlex = motion<FlexProps>(Flex);
export const MotionBox = motion<BoxProps>(Box);
export const MotionStack = motion<StackProps>(Stack);