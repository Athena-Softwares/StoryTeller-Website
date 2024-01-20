import React from 'react';
import { useRouter } from 'next/router';
import { Container, Grid, Input, Text } from '@nextui-org/react';
import styles from '../../styles/FriendList.module.css';
import { amigosTeste } from './dataTeste';
import Image from "next/image";
import {Col} from "reactstrap";
export const FriendList = (props) => {
    const router = useRouter();
    return (
        <Container class={`
            position-absolute end-0 
            border border-1 border-opacity-10
            col-sm-2 
            ${styles.friends_body}
        `}>
            <Container class={`${styles.friends_header} d-flex justify-content-center align-items-center`}>
                <Text class={`${styles.friends_header_text}`}>Amigos</Text>
            </Container>
            <Container class={`
                w-auto 
                ${styles.friends_body}
            `}>
                <div class={`d-flex w-100 justify-content-center p-1`}>
                    <Input class={`w-100`}/>
                </div>
                {amigosTeste.map((info) =>{
                    return (
                        <div class={`justify-content-between d-inline d-flex ${styles.friends_card}`} key={info.Nick}>
                            <Image class={`${styles.friends_card_icon}`} width={50} height={50} src='/foto_perfil.jpg'
                                   alt='logo Story Teller'/>
                            <div class={`d-inline justify-content-center`}>
                                <Text class={`${styles.friends_card_text}`}>{info.Nome}</Text>
                                <Text class={`${styles.friends_card_text}`}>{info.Nick}</Text>
                            </div>

                            <span className={`float-end`}>O</span>
                        </div>
                    )
                })}
            </Container>
        </Container>
    )
}

export default FriendList;