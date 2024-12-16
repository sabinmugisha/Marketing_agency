import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const MarketingRecommendations = () => {
    const [recommendation, setRecommendation] = useState('');

    const generateRecommendation = () => {
        const sampleRecommendations = [
            'Focus on social media marketing targeting users aged 18-35.',
            'Offer discounts on organic products to attract eco-conscious customers.',
            'Create mobile-friendly campaigns to capture mobile-first users.',
            'Leverage fitness influencers to promote your fitness classes.',
        ];

        const randomIndex = Math.floor(Math.random() * sampleRecommendations.length);
        setRecommendation(sampleRecommendations[randomIndex]);
    };

    return (
        <Card className="shadow-sm mb-4">
            <Card.Body>
                <Card.Title className="text-center">Personalized Marketing Recommendation</Card.Title>
                <Card.Text className="text-center">
                    Get personalized recommendations based on customer insights.
                </Card.Text>
                <div className="text-center">
                    <Button variant="primary" onClick={generateRecommendation}>
                        Generate Recommendation
                    </Button>
                </div>
                {recommendation && (
                    <div className="mt-3">
                        <Card className="text-center">
                            <Card.Body>{recommendation}</Card.Body>
                        </Card>
                    </div>
                )}
            </Card.Body>
        </Card>
    );
};

export default MarketingRecommendations;
