import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.gradient}></div>
                <div className={styles.grid}></div>
            </div>

            <Container>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>Now in Beta</span>
                    </div>

                    <h1 className={styles.title}>
                        Build your product
                        <span className={styles.gradient_text}> faster than ever</span>
                    </h1>

                    <p className={styles.subtitle}>
                        The complete platform for modern teams. Ship features, track performance,
                        and scale with confidence. Trusted by over 10,000 companies worldwide.
                    </p>

                    <div className={styles.cta}>
                        <Button size="lg">
                            Start Free Trial
                        </Button>
                        <Button variant="outline" size="lg">
                            Watch Demo
                        </Button>
                    </div>

                    <div className={styles.social_proof}>
                        <div className={styles.avatars}>
                            <img
                                src="https://i.pravatar.cc/80?img=12"
                                alt="User avatar"
                                className={styles.avatar}
                            />
                            <img
                                src="https://i.pravatar.cc/80?img=32"
                                alt="User avatar"
                                className={styles.avatar}
                            />
                            <img
                                src="https://i.pravatar.cc/80?img=48"
                                alt="User avatar"
                                className={styles.avatar}
                            />
                            <img
                                src="https://i.pravatar.cc/80?img=65"
                                alt="User avatar"
                                className={styles.avatar}
                            />
                        </div>
                        <p className={styles.social_text}>
                            <strong>2,000+</strong> developers shipped their first feature this week
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};