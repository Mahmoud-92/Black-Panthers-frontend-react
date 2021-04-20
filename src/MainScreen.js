import React from 'react';
import Carousel from './Carousel';
import Card from './Card';
import NavBar from './NavBar';


const cardContent = [
    {
        title: 'Give more time to what really matters.',
        description: 'We know how valuable your time is. With Flex,you can plan your week by choosing what time do you prefer to work at. Not only this, but you can also choose the locations that are covenient to you, then get back to living your life.',
        imgSrc: './family-time.jpg'
    },
    {
        title: 'Make quicker progress toward your goals.',
        description: 'If you’re saving up for something big. Or if you just want to earn some extra money for day-to-day expenses.Whatever your motive is, get closer to your goals with Flex.',
        imgSrc: './quicker-progress.jpg'
    },
    {
        title: 'Share your experince with people you love.',
        description: 'Its a "Win Win" situation, refer your friends and get exclusive rates. Let others earn more and have the same balanced joyful life that you are having.',
        imgSrc: './enjoy-time.jpg'
    },
]

function MainScreen() {
    return (
        <div>

            { /* Carousel goes here */}
            <Carousel images={['./happy-delivery.jpg', './delivery-man.jpg']} />

            { /* Cards go here */}
            <div className="container my-4">
                <div className="row">

                    {
                        cardContent.map(
                            (arrElement) => {
                                return (
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <Card
                                            className="mb-4 m-auto"
                                            title={arrElement.title}
                                            imgSrc={arrElement.imgSrc}
                                            description={arrElement.description}
                                        />
    
                                    </div>
                                )
                            }
                        )
                    }

                </div>
            </div>

        </div>
    );
}

export default MainScreen;
