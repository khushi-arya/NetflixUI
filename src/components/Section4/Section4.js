import React, { useState } from 'react';
import './Section4.css';

export default function Section4() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const accordionItems = [
        {
            title: "What is Netflix?",
            content: (
                <>
                    <p>
                        Netflix is a streaming service that offers a wide variety of award-winning TV shows,
                        movies, anime, documentaries and more – on thousands of internet-connected devices.
                    </p>
                    <p>
                        You can watch as much as you want, whenever you want, without a single ad – all
                        for one low monthly price. There's always something new to discover, and new TV
                        shows and movies are added every week!
                    </p>
                </>
            )
        },
        {
            title: "How much does Netflix cost?",
            content: (
                <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device,
                    all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                </p>
            )
        },
        {
            title: "Where can I watch?",
            content: (
                <>
                    <p>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the
                        web at netflix.com from your personal computer or on any internet-connected device
                        that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media
                        players and game consoles.
                    </p>
                    <p>
                        You can also download your favourite shows with the iOS, Android, or Windows
                        10 app. Use downloads to watch while you're on the go and without an internet
                        connection. Take Netflix with you anywhere.
                    </p>
                </>
            )
        },
        {
            title: "How do I cancel?",
            content: (
                <p>
                    Netflix is flexible. There are no annoying contracts and no commitments.
                    You can easily cancel your account online in two clicks. There are no
                    cancellation fees – start or stop your account anytime.
                </p>
            )
        },
        {
            title: "What can I watch on Netflix?",
            content: (
                <p>
                    Netflix has an extensive library of feature films, documentaries, TV shows,
                    anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                </p>
            )
        },
        {
            title: "Is Netflix good for kids?",
            content: (
                <>
                    <p>
                        The Netflix Kids experience is included in your membership to give parents control while
                        kids enjoy family-friendly TV shows and films in their own space.
                    </p>
                    <p>
                        Kids profiles come with PIN-protected parental controls that let you restrict the
                        maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="faq">
            <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                {accordionItems.map((item, index) => (
                    <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                        <div className="accordion-title" onClick={() => handleAccordionClick(index)}>
                            {item.title}
                        </div>
                        {activeIndex === index && (
                            <div className="accordion-content">
                                {item.content}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
