import Header from '@/Components/Header'
import Head from 'next/head'
import React from 'react'

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
            </main>
        </>
    )
}

export default Dashboard