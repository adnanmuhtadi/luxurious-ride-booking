
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQData = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend booking at least 24-48 hours in advance to ensure availability, particularly during peak periods. For special events or busy seasons, booking several weeks ahead is advisable. However, we do accommodate last-minute bookings subject to availability.'
  },
  {
    question: 'What if my flight is delayed?',
    answer: 'We monitor all flight arrivals in real-time. If your flight is delayed, your chauffeur will adjust their schedule accordingly at no extra charge. We ensure that someone is waiting for you regardless of when your flight arrives.'
  },
  {
    question: 'Are gratuities included in the price?',
    answer: 'Gratuities are not included in our standard pricing. While tipping is discretionary, a gratuity of 15-20% is customary for exceptional service and is greatly appreciated by our chauffeurs.'
  },
  {
    question: 'Can I request a specific type of vehicle?',
    answer: 'Yes, you can select from our range of luxury vehicles during the booking process. From executive sedans to spacious SUVs and premium vans, we offer various options to accommodate different group sizes and preferences.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'Cancellations made at least 24 hours before the scheduled service receive a full refund. Cancellations within 12-24 hours incur a 50% charge, while those made less than 12 hours before the service are subject to the full fare.'
  },
  {
    question: 'Do you provide child seats?',
    answer: 'Yes, we provide child seats upon request. Please specify the age and weight of the child when booking, so we can provide the appropriate type of child seat. There is a small additional charge for this service.'
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-luxury-dark">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Find answers to common questions about our services, booking process, and policies
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border border-gold-500/20 px-6 rounded-xl overflow-hidden animate-on-scroll"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-lg font-medium py-5 text-gold-500 hover:no-underline hover:text-gold-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Didn't find the answer you were looking for? Feel free to contact us directly.
            </p>
            <a href="#contact" className="ghost-button inline-flex">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
