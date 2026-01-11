import React from 'react';
import { Container } from './Container';
import styles from './Features.module.css';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Built for speed with optimized performance and instant page loads. Your users will love the experience.',
    },
    {
        icon: '🔒',
        title: 'Secure by Default',
        description: 'Enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular security audits.',
    },
    {
        icon: '📊',
        title: 'Advanced Analytics',
        description: 'Get deep insights into your metrics with real-time dashboards and customizable reports.',
    },
    {
        icon: '🎨',
        title: 'Beautiful Design',
        description: 'Pixel-perfect UI components that look great on every device. Fully customizable to match your brand.',
    },
    {
        icon: '🚀',
        title: 'Easy Integration',
        description: 'Connect with your favorite tools in minutes. REST API, webhooks, and SDKs for all major platforms.',
    },
    {
        icon: '💬',
        title: '24/7 Support',
        description: 'Our expert team is always here to help. Get answers in minutes, not days.',
    },
];

export const Features: React.FC = () => {
    return (
        <section className={styles.features}>
            <Container>
                <div className={styles.header}>
                    <span className={styles.overline}>Features</span>
                    <h2 className={styles.title}>Everything you need to succeed</h2>
                    <p className={styles.subtitle}>
                        Powerful features designed to help you build, launch, and scale your product with confidence.
                    </p>
                </div>

                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{feature.icon}</span>
                            </div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};