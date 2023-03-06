import { About } from './components/about';
import HeroWithBackgroundImage from './components/hero-background-image';
import ProductDescription from './components/product-description';
import Testimonials, { Transformations } from './components/testimonials';
import Faq from './components/product-faq';

export default function Product({
  product,
  siteInfo
}) {

  const HeroComponent = product.AppScreenshots ? HeroWithApp : HeroWithBackgroundImage;

  return (
    <div>
      {product.fixedStartDate ? <CoundDown starting /> : null}
      <HeroWithBackgroundImage
        title={product.title}
        intro={product.intro}
        checklist={product.checklist}
        backgroundImage={product.image}
        availableSpots={product.availableSpots}
      />
      <Transformations
        title={siteInfo.transformationsTitle}
        transformations={siteInfo.transformations}
      />
      <ProductDescription
        title={product.title}
        checklistLearnings={product.checklistLearnings}
        checklistIncludes={product.checklistIncludes}
        periodsV2={product.periodsV2}
        backgroundImage={product.image}
        id={product.id}
        price={product.price}
        currency={product.currency}
      />
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
      <ProductFaq
        title={siteInfo.testimionalsTitle}
        testimionals={siteInfo.testimionals}
        id={product.id}
        price={product.price}
        currency={product.currency}
      />
    </div>
  );
}