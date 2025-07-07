import { useState } from 'react';

const pricingPlans = {
    monthly: [
        {
            name: 'Free eSign',
            price: 'Free',
            features: [
                'Unlimited legally binding eSignatures',
                'Unlimited document uploads',
                'Payments',
                'Mobile app'
            ],
            cta: 'Create Account'
        },
        {
            name: 'Essentials',
            price: '$19 USD',
            features: [
                'Templates',
                'Rich media drag and drop document editor',
                'Document analytics',
                '24/7 email and chat support'
            ],
            cta: 'Start Free Trial'
        },
        {
            name: 'Business',
            price: '$49 USD',
            features: [
                'CRM and Zapier integrations',
                'Custom branding',
                'Forms',
                'Content library',
                'Approval workflows',
                'Bulk send'
            ],
            cta: 'Start Free Trial'
        },
        {
            name: 'Enterprise',
            price: '$79 USD',
            features: [
                'SSO support and custom user roles',
                'Salesforce integration',
                'Notary',
                'Unlimited number of team workspaces',
                'User performance and content reporting',
                'API'
            ],
            cta: 'Start Free Trial'
        },
    ],
    annually: [
        {
            name: 'Free eSign',
            price: 'Free',
            features: [
                'Unlimited legally binding eSignatures',
                'Unlimited document uploads',
                'Payments',
                'Mobile app'
            ],
            cta: 'Create Account'
        },
        {
            name: 'Essentials',
            price: '$15 USD',
            features: [
                'Templates',
                'Rich media drag and drop document editor',
                'Document analytics',
                '24/7 email and chat support'
            ],
            cta: 'Start Free Trial'
        },
        {
            name: 'Business',
            price: '$39 USD',
            features: [
                'CRM and Zapier integrations',
                'Custom branding',
                'Forms',
                'Content library',
                'Approval workflows',
                'Bulk send'
            ],
            cta: 'Start Free Trial'
        },
        {
            name: 'Enterprise',
            price: '$65 USD',
            features: [
                'SSO support and custom user roles',
                'Salesforce integration',
                'Notary',
                'Unlimited number of team workspaces',
                'User performance and content reporting',
                'API'
            ],
            cta: 'Start Free Trial'
        },
    ],
};

export const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');

    return (
        <section className="bg-white text-neutral-900 py-16 sm:py-24">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold max-w-4xl mx-auto">
                    Fair pricing to maintain the growth of your business
                </h2>
                <p className="mt-4 text-neutral-700 max-w-2xl mx-auto">
                    Select a subscription plan for your team or try advanced functionality for free.
                </p>

                {/* Toggle Switch */}
                <div className="mt-8 flex justify-center items-center gap-4">
                    <button
                        onClick={() => setBillingCycle('monthly')}
                        className={`px-6 py-3 rounded-full font-medium transition ${
                            billingCycle === 'monthly'
                                ? 'bg-neutral-900 text-white'
                                : 'bg-transparent text-neutral-900 hover:bg-neutral-100'
                        }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle('annually')}
                        className={`px-6 py-3 rounded-full font-medium transition ${
                            billingCycle === 'annually'
                                ? 'bg-primary text-white'
                                : 'bg-transparent text-neutral-900 hover:bg-neutral-100'
                        }`}
                    >
                        Annually
                    </button>
                </div>

                {/* Pricing Cards - Split into individual cards */}
                <div className="mt-12 max-w-6xl mx-auto space-y-6">
                    {pricingPlans[billingCycle].map((plan) => (
                        <div key={plan.name} className="bg-neutral-50 rounded-2xl p-8 lg:p-12 border border-neutral-200">
                            <div className="grid lg:grid-cols-12 gap-8 items-center">
                                {/* Plan Name */}
                                <div className="lg:col-span-2">
                                    <h3 className="text-xl font-bold text-left">{plan.name}</h3>
                                </div>

                                {/* Features */}
                                <div className="lg:col-span-7">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {plan.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3 text-left">
                                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                                </svg>
                                                <span className="text-sm text-neutral-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Price and CTA */}
                                <div className="lg:col-span-3 text-center lg:text-right">
                                    <div className="text-2xl font-bold text-neutral-900 mb-4">
                                        {plan.price}
                                    </div>
                                    <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition w-full lg:w-auto">
                                        {plan.cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};