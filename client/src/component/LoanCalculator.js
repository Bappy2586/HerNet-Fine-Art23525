import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = (principal, annualInterestRate, termYears) => {
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = termYears * 12;
    const numerator = monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1;
    return principal * (numerator / denominator);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payment = calculateMonthlyPayment(loanAmount, interestRate, loanTerm);
    setMonthlyPayment(payment);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Loan Calculator</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="loanAmount">
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter loan amount" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="interestRate">
              <Form.Label>Annual Interest Rate (%)</Form.Label>
              <Form.Control 
                type="number" 
                step="0.01" 
                placeholder="Enter interest rate" 
                value={interestRate} 
                onChange={(e) => setInterestRate(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="loanTerm">
              <Form.Label>Loan Term (years)</Form.Label>
              <Form.Control 
                type="number" 
                placeholder="Enter loan term" 
                value={loanTerm} 
                onChange={(e) => setLoanTerm(e.target.value)} 
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Calculate
            </Button>
          </Form>
          {monthlyPayment !== null && (
            <h2>Monthly Payment: BDT {monthlyPayment.toFixed(2)}</h2>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default LoanCalculator;
