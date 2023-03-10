import { About } from './components/about';
import HeroWithBackgroundImage from './components/hero-background-image';
import Testimonials from './components/testimonials';
import Transformations from './components/transformations';

import Faq from './components/product-faq';
import Calendar from './components/calendar';
import AvailableProducts from './components/available-products';
import SubscriptionPicker from './components/subscription-picker';



export default function Landing({
  product,
  siteInfo
}) {

  const HeroComponent = product.AppScreenshots ? HeroWithApp : HeroWithBackgroundImage;
  return (
    <div>
      {product.fixedStartDate && product.displayCountDown ? <CountDown prefix="Starting in" date="product.fixedStartDate" /> : null}
      <HeroComponent
        title={siteInfo.title}
        intro={siteInfo.intro}
        checklist={siteInfo.checklist}
        backgroundImage={siteInfo.image}
        appScreenshots={siteInfo.appScreenshots}
      />
      <Transformations
        title={siteInfo.transformationsTitle}
        transformations={siteInfo.transformations}
      />
      {siteInfo.displayPersonalizedPlan ? <PersonalizedPlan
        title={siteInfo.personalizedPlanTitle}
        description={siteInfo.personalizedPlanDescription}
        checklist={siteInfo.personalizedPlanChecklist}
        image={siteInfo.personalizedPlanImage}
        personalizedPlanUrl={siteInfo.personalizedPlanUrl}
      />}

      {siteInfo.displayCalendar && <Calendar
        title={siteInfo.calendarTitle}
        description={siteInfo.calendarDescription}
      />}

      {siteInfo.displayAvailableProducts && <AvailableProducts
        checklistLearnings={product.checklistLearnings}
        checklistIncludes={product.checklistIncludes}
        periodsV2={product.periodsV2}
        backgroundImage={product.image}
        id={product.id}
        price={product.price}
        currency={product.currency}
      />}

      <About
        photo={siteInfo.aboutPhoto}
        name={siteInfo.name}
        bio={siteInfo.bio}
        instaLink={siteInfo.instaLink}
        instaFollowersCount={siteInfo.instaLink}
        youtubeLink={siteInfo.youtubeLink}
        youtubeFollowersCount={siteInfo.youtubeFollowersCount}
        tiktokLink={siteInfo.titktokLink}
        tiktokFollowersCount={siteInfo.tiktokFollowersCount}
      />
      <Testimonials
        title={siteInfo.testimionalsTitle}
        testimionals={siteInfo.testimionals}
      />

      <GeneralFaq
        title={siteInfo.testimionalsTitle}
        testimionals={siteInfo.testimionals}
        id={product.id}
        price={product.price}
        currency={product.currency}
      />
    </div>
  );
}