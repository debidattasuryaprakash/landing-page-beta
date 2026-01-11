import React from 'react';
import { Container } from './Container';
import { Button } from './Button';
import styles from './Pricing.module.css';

interface PricingTier {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
}

const pricingTiers: PricingTier[] = [
    {
        name: 'Starter',
        price: '$29',
        description: 'Perfect for small teams getting started',
        features: [
            'Up to 5 team members',
            '50 projects',
            '10GB storage',
            'Basic analytics',
            'Email support',
            'Core features',
        ],
        cta: 'Start Free Trial',
    },
    {
        name: 'Professional',
        price: '$99',
        description: 'For growing teams that need more power',
        features: [
            'Up to 25 team members',
            'Unlimited projects',
            '100GB storage',
            'Advanced analytics',
            'Priority support',
            'All features',
            'Custom integrations',
            'API access',
        ],
        highlighted: true,
        cta: 'Start Free Trial',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations with custom needs',
        features: [
            'Unlimited team members',
            'Unlimited projects',
            'Unlimited storage',
            'Enterprise analytics',
            'Dedicated support',
            'Everything in Pro',
            'Custom development',
            'SLA guarantee',
            'On-premise option',
        ],
        cta: 'Contact Sales',
    },
];

export const Pricing: React.FC = () => {
    return (
        <section className={styles.pricing}>
            <Container>
                <div className={styles.header}>
                    <span className={styles.overline}>Pricing</span>
                    <h2 className={styles.title}>Simple, transparent pricing</h2>
                    <p className={styles.subtitle}>
                        Choose the perfect plan for your team. All plans include a 14-day free trial.
                    </p>
                </div>

                <div className={styles.grid}>
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`${styles.card} ${tier.highlighted ? styles.highlighted : ''}`}
                        >
                            {tier.highlighted && (
                                <div className={styles.badge}>Most Popular</div>
                            )}

                            <div className={styles.cardHeader}>
                                <h3 className={styles.tierName}>{tier.name}</h3>
                                <div className={styles.priceWrapper}>
                                    <span className={styles.price}>{tier.price}</span>
                                    {tier.price !== 'Custom' && (
                                        <span className={styles.period}>/month</span>
                                    )}
                                </div>
                                <p className={styles.description}>{tier.description}</p>
                            </div>

                            <ul className={styles.features}>
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className={styles.feature}>
                                        <span className={styles.checkmark}>✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.highlighted ? 'primary' : 'outline'}
                                size="lg"
                                className={styles.cta}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    ))}
                </div>

                <p className={styles.disclaimer}>
                    All plans include our core features. No credit card required for trial.
                    Cancel anytime.
                </p>
            </Container>
        </section>
    );
};