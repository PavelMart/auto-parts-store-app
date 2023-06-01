import React, {useState, useEffect, useContext} from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';
import { createType } from '../../http/partAPI';
import { fetchBrands, fetchTypes } from '../../http/partAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../..';

const CreateBasketPart = observer(({show, onHide}) => {
    const [fullname, setFullname] = useState(''); 
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [address, setAddress] = useState(''); 


    const {part, basket} = useContext(Context);
    
    useEffect(() => {
    }, []);

    const addType = () => {
        createType({name: value})
            .then(data => {
                setValue('');
                onHide();
            })
    };

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Оплатить заказ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Control 
                    value={fullname}
                    onChange={e => setFullname(e.target.value)}
                    placeholder={'ФИО заказчика'}></Form.Control>
                <Form.Control 
                    value={phoneNumber}
                    onChange={e => setValue(e.target.value)}
                    placeholder={'Номер телефона'}></Form.Control>
                <Form.Control 
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder={'Адрес'}></Form.Control>
                <Form.Control 
                    placeholder={'Номер карты'}></Form.Control>
                <Form.Control 
                    placeholder={'CVV'}></Form.Control>
            </Modal.Body>
            <Modal.Footer>
                <div>К оплате: 25000 руб.</div>
                <Button variant={'outline-dark'} onClick={onHide}>Закрыть</Button>
                <Button variant={'outline-dark'} onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateBasketPart;