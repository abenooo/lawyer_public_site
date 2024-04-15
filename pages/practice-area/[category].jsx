import getImageUrl from '../../utils/imageUtils';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import practiceAreaContent from '../../data/practiceAreaContent';

const PracticeAreaPage = () => {
  const router = useRouter();
  const { category } = router.query;

  if (!category) return <div>Loading...</div>;

  const content = practiceAreaContent[category] || {};
  const { title, description, details } = content;
  const imageUrl = getImageUrl(category);  // Use the utility function

  return (
    <div>
      <Header imageUrl={imageUrl} logoUrl="/assets/logo.jpeg" text={title} />
      <div className="container mx-auto px-4 py-8">
        <h2>{title}</h2>
        <p>{description}</p>
        <ul>
          {details && details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PracticeAreaPage;
