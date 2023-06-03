import Image from 'next/image'
import React from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import styles from '../../styles/Header.module.css'
import buttons from '../../styles/Buttons.module.css'
import { useRouter } from 'next/router'
import { UploadIcon } from '@/assets/Icons/UploadIcon'
import { ArrowIcon } from '@/assets/Icons/ArrowIcon'

export default function Header(props) {
    const router = useRouter()
  return (
    <Container fluid className={`${styles.header}`}>
            <Row className={`${styles.header} justify-content-evenly align-items-center py-1`}>
                <Col sm={6} lg={9} className='d-flex justify-content-center justify-content-sm-start'>
                    <Image width={70} height={54.01} src='/story_teller_logo_compacto.svg' alt='logo Story Teller' onClick={() => router.push('/')} />
                </Col>
                <Col sm={6} lg={3}>
                    <RenderItems type={props.type}/>
                </Col>
            </Row>
        </Container>
  )
}

const RenderItems = ({type}) => {
    switch (type) {
        case "index":
            return <IndexItems />;
        case "dashboard":
            return <DashboardItems />;
        default:
            return <DashboardItems />;
    }
  };

const DashboardItems = () => {
    return (
        <Row>
            <Col sm={12} className='d-flex justify-content-center justify-content-md-end align-items-center'>
                <ArrowIcon fill="white" />
            </Col>
        </Row>
    )
}

const IndexItems = () => {
    const router = useRouter()
    return (
        <Col sm={12} className='d-flex justify-content-center justify-content-md-end'>
            <Button size='sm' className={`${buttons.secondary} ${buttons.general} mx-1`} onClick={() => router.push('/login')}>Entre</Button>
            <Button size='sm' className={`${buttons.primary} ${buttons.general} mx-1`}>Cadastre-se</Button> 
        </Col>
    )
}