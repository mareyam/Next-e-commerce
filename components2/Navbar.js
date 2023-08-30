import React, {useState} from 'react'
import {
    Center, 
    Icon, 
    CheckIcon,
    IconButton,
    Button,
    Container,
    SimpleGrid,
    Box,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    Flex,
    Link,
  } from "@chakra-ui/react";
import { DragHandleIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import styles from '../styles/navbar.module.css'




const Navbar = () => {
    const [toggleHam, setToggleHam] = useState(false)
  return (
    <container className={styles.container}>
            <div className={styles.flex}>
                <Link as={NextLink} href='/'>
                  <Heading>Logo</Heading>
                </Link>

                <div className={styles.box1}>
                <IconButton
                  className={styles.icon1}
                  transform={toggleHam ? "rotate(0deg)" : "rotate(90deg)"}
                  icon={<Box ><DragHandleIcon /></Box>}
                  onClick={() => setToggleHam(!toggleHam)}
                ></IconButton>
                </div>
                
                
                <div className={styles.box2}>
                <div className={styles.box3} gap='3'>
                   <Link as={NextLink} href='/'>
                      Home
                    </Link>
                    <Link as={NextLink} href='/products'>
                      Products
                    </Link>
                    <Link as={NextLink} href='/cart'>
                      Cart
                    </Link>
                </div>
                </div>
            </div>
            
            {toggleHam &&
            <div className={styles.box4}>
                    <div className={styles.box5}>
                    <Link as={NextLink} href='/'>
                      Home
                    </Link>
                    <Link as={NextLink} href='/products'>
                      Products
                    </Link>
                    <Link as={NextLink} href='/cart'>
                      Cart
                    </Link>

                    </div>
            </div>}
    </container>
   
  )
}

export default Navbar