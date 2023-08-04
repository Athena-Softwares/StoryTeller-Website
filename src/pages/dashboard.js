import Header from '@/Components/Header'
import FriendList from '@/Components/FriendList'
import Head from 'next/head'
import React from 'react'
import styles from '../styles/Containers.module.css'
import { Container } from '@nextui-org/react'

function Dashboard() {
    return (
        <>
            <Head>
                <title>Story Teller</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/storyicon.ico" />
            </Head>
            <main>
                <Header />
                <Container class={`
                    ${styles.container_white}
                `}>
                    
                    <FriendList/>
                </Container>
            </main>
        </>
    )
}

export default Dashboard