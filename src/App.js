import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Footer, Row } from "./components/styles";
import { useState } from 'react';

const App = () => {
  const [expression, setExpression] = useState('')

  const handleOnClear = () => {
    setExpression('')
  };

  const handleAddToExpression = (value) => {
    setExpression(prev => `${prev}${value}`);
  };

  const handleEvaluateExpression = () => {
    try {
      const result = eval(expression);
      setExpression(String(result));
    } catch (error) {
      setExpression('Error');
    }
  };




  return (
    <Container>
      <Content>
        <Input value={expression} />
        <Row>
        <Button label="AC" onClick={handleOnClear} variant='white'/>
        <Button label="+/-" variant='white'/>
        <Button label="%"  onClick={() => handleAddToExpression('%')} variant='white'/>
          <Button label="/"  onClick={() => handleAddToExpression('/')} variant='orange'/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddToExpression('7')}/>
          <Button label="8" onClick={() => handleAddToExpression('8')}/>
          <Button label="9" onClick={() => handleAddToExpression('9')}/>
          <Button label="X" onClick={() => handleAddToExpression('*')} variant='orange'/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddToExpression('4')}/>
          <Button label="5" onClick={() => handleAddToExpression('5')}/>
          <Button label="6" onClick={() => handleAddToExpression('6')}/>
          <Button label="-" onClick={() => handleAddToExpression('-')} variant='orange'/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddToExpression('1')}/>
          <Button label="2" onClick={() => handleAddToExpression('2')}/>
          <Button label="3" onClick={() => handleAddToExpression('3')}/>
          <Button label="+" onClick={() => handleAddToExpression('+')} variant='orange'/>
        </Row>
        <Row>
        <Button label="0" onClick={() => handleAddToExpression('0')} variant='primary'>
        </Button>
        <Button label="."/>
        <Button label="=" onClick={handleEvaluateExpression} variant='orange'/>
        </Row>
      </Content>
      <Footer>Desenvolvido por Thiago Alexandre © 2024</Footer>
    </Container> 
  );
};

export default App;
