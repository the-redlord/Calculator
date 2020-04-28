import React from 'react';
import {Button,Container,Row,Col} from 'react-bootstrap';
import './Calculator.css';

function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function Calc() {
    return(
        <div>
            <Container>
                {/*DisplayField*/}
                <Row>
                    <Col>
                    hi
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button size="lg" variant="info" >C</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >/</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >*</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >-</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button size="lg" variant="info" >7</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >8</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >9</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >+</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button size="lg" variant="info" >4</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >5</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >6</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >x^2</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button size="lg" variant="info" >1</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >2</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >3</Button>
                    </Col>
                    <Col>
                        <Button size="lg" variant="info" >=</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }

export default Calc;