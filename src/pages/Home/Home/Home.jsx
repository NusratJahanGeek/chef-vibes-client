import React from 'react';
import ChefSection from '../ChefSection/ChefSection';
import TestimonialSection from '../TestimonialSection/TestimonialSection';
import RecipeSection from '../RecipeSection/RecipeSection';
import RecipeProvider from '../../Shared/RecipeProvider/RecipeProvider';

const Home = () => {
    return (
        <div>
            <ChefSection></ChefSection>
            <div className="bg-dark p-5 my-5">
            <TestimonialSection></TestimonialSection>
            </div>
            <RecipeProvider>
      <RecipeSection />
    </RecipeProvider>
        </div>
    );
};

export default Home;