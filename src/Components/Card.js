import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function BasicExample() {
    return (
        <Container>
            <div class="row">
                <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="icon-256x256.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        
                        
                    </Card>
                </div>
                <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="icon-256x256.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        
                        
                    </Card>
                </div>
                <div class="col-md-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="icon-256x256.png" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        
                        
                    </Card>
                </div>
            </div>
            
        </Container>
    );
}

export default BasicExample;