import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import styles from './CTA.module.css';

export const CTA: React.FC = () => {
    return (
        <section className={styles.cta}>
            <Container>
                <div className={styles.content}>
                    <div className={styles.background}>
                        <div className={styles.gradient}></div>
                        <div className={styles.pattern}></div>
                    </div>

                    <div className={styles.text}>
                        <h2 className={styles.title}>Ready to get started?</h2>
                        <p className={styles.subtitle}>
                            Join thousands of teams already using our platform to build better products faster.
                            Start your free 14-day trial today—no credit card required.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <Button size="lg">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" size="lg">
                            Schedule Demo
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};