import React from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Input, Text } from '@nextui-org/react';
import styles from '../../styles/FriendList.module.css';
import { amigosTeste } from './dataTeste';
export const FriendList = (props) => {
    const router = useRouter();
    return (
        <Container class={`
            position-absolute end-0 
            border border-1 border-opacity-10
            col-sm-2
            ${styles.friends_body}
        `}>
            <Container class={`${styles.background_header} d-flex justify-content-center align-items-center`}>
                <Text>Amigos</Text>
            </Container>
            <Container class={`
                ${styles.friends_body}
            `}>
                <Input></Input>
                {amigosTeste.map((info) =>{
                    return (<Text key={info.Nick}>{info.Nome}</Text>)
                })}
            </Container>
        </Container>
    )
}

export default FriendList;