import { ResultThumbnail } from '@/widgets/creativity-section/results-gallery/result-thumbnail/result-thumbnail';

import mock1 from './mock/mock1.png';
import mock2 from './mock/mock2.png';
import mock3 from './mock/mock3.png';
import mock4 from './mock/mock4.png';
import styles from './results-gallery.module.scss';

const result = [
  { id: '1', img: mock1 },
  { id: '2', img: mock2 },
  { id: '3', img: mock3 },
  { id: '4', img: mock4 },
];

export const ResultsGallery = () => {
  return (
    <div className={styles.container}>
      {result.map(item => (
        <ResultThumbnail key={item.id} item={item} />
      ))}
    </div>
  );
};
