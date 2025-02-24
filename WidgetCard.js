import React from 'react';
import { Card } from 'react-bootstrap';

const WidgetCard = ({ title, text }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WidgetCard;
