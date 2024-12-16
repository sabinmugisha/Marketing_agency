import React, { useState } from 'react';
import { Button, Card, Form, Alert } from 'react-bootstrap';

const AdGenerator = () => {
    const [description, setDescription] = useState('');
    const [adCopy, setAdCopy] = useState('');
    const [loading, setLoading] = useState(false);

    // Sample ad copy templates
    const adTemplates = [
        "Are you looking for a place to relax and unwind? Visit our {business} and enjoy the best of comfort and relaxation. Book now!",
        "Discover the finest {business} in your area. Whether you're looking for quality products or a welcoming atmosphere, we've got you covered.",
        "Your next favorite {business} is just around the corner. Visit us today and experience what makes us unique!",
        "Looking for the best {business}? We're known for our amazing service and quality. Come see why everyone loves us!"
    ];

    // Function to generate a simulated ad copy based on the description
    const generateAd = () => {
        setLoading(true);
        setTimeout(() => {
            const randomTemplate = adTemplates[Math.floor(Math.random() * adTemplates.length)];
            const newAdCopy = randomTemplate.replace('{business}', description);
            setAdCopy(newAdCopy);
            setLoading(false);
        }, 1000); // Simulate loading delay
    };

    return (
        <Card className="shadow-lg mb-4" style={{ maxWidth: '600px', margin: 'auto' }}>
            <Card.Body>
                <h2 className="card-title text-center">Generate Ad Copy</h2>
                <Form onSubmit={(e) => { e.preventDefault(); generateAd(); }}>
                    <Form.Group controlId="description" className="mb-3">
                        <Form.Label>Describe Your Business</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="e.g., A cozy coffee shop in Kigali"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading || !description}
                    >
                        {loading ? 'Loading...' : 'Generate'}
                    </Button>
                </Form>

                {adCopy && (
                    <div className="mt-4">
                        <h3>Generated Ad:</h3>
                        <Alert variant="success">
                            <p>{adCopy}</p>
                        </Alert>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default AdGenerator;
