import React, { useState } from 'react';
import { Card, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { FaChartLine, FaUsers, FaMobileAlt, FaApple, FaLeaf } from 'react-icons/fa';

const CustomerInsights = () => {
    const [showFullReport, setShowFullReport] = useState(false);

    const trends = [
        { icon: <FaChartLine />, text: 'Fitness classes are in demand.' },
        { icon: <FaLeaf />, text: 'Organic products are gaining popularity.' },
    ];
    
    const demographics = [
        { icon: <FaUsers />, text: '50% of customers are aged 18-35.' },
        { icon: <FaMobileAlt />, text: '70% prefer mobile-friendly websites.' },
    ];

    // Sample full report data
    const fullReport = {
        marketOverview: 'The fitness and organic product markets are experiencing substantial growth...',
        customerSegments: 'Young professionals aged 25-35 are the most active customers for fitness...',
        competitorAnalysis: 'Top competitors are focusing heavily on online platforms and personalized marketing...',
    };

    const toggleFullReport = () => {
        setShowFullReport(!showFullReport);
    };

    return (
        <Card className="shadow-lg mb-4">
            <Card.Body>
                <Card.Title className="text-center mb-4">Customer Insights</Card.Title>

                <Row>
                    {/* Trends Section */}
                    <Col md={6}>
                        <Card className="shadow-sm mb-3">
                            <Card.Header className="bg-primary text-white">
                                <h4><FaChartLine /> Top Trends</h4>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    {trends.map((trend, index) => (
                                        <ListGroupItem key={index} className="d-flex align-items-center">
                                            <div className="me-3" style={{ fontSize: '1.5rem' }}>
                                                {trend.icon}
                                            </div>
                                            {trend.text}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Demographics Section */}
                    <Col md={6}>
                        <Card className="shadow-sm mb-3">
                            <Card.Header className="bg-success text-white">
                                <h4><FaUsers /> Demographics</h4>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup>
                                    {demographics.map((demo, index) => (
                                        <ListGroupItem key={index} className="d-flex align-items-center">
                                            <div className="me-3" style={{ fontSize: '1.5rem' }}>
                                                {demo.icon}
                                            </div>
                                            {demo.text}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Full Report Section */}
                {showFullReport && (
                    <div className="mt-4">
                        <h3>Full Market Report</h3>
                        <p><strong>Market Overview:</strong> {fullReport.marketOverview}</p>
                        <p><strong>Customer Segments:</strong> {fullReport.customerSegments}</p>
                        <p><strong>Competitor Analysis:</strong> {fullReport.competitorAnalysis}</p>
                    </div>
                )}

                {/* Action Button */}
                <div className="text-center mt-4">
                    <Button variant="primary" onClick={toggleFullReport}>
                        {showFullReport ? 'Hide Full Report' : 'View Full Report'}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CustomerInsights;
