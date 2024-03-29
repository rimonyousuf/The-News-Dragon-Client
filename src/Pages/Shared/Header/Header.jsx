import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <p className="text-secondary">Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex text-bg-secondary p-2'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={50}>
                    I can be a React component, multiple React components, or just some text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis itaque libero doloribus numquam non eligendi quos vitae enim dicta eos.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;