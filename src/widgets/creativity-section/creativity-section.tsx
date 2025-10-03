import { FooterNavigation } from '@/widgets';

import styles from './creativity-section.module.scss';
import { GenerationModes } from './generation-modes';
import { LoadingIndicator } from './loading-indicator';
import { MainContent } from './main-content';

export const CreativitySection = () => {
  return (
    <div className={styles.container}>
      <MainContent />
      <GenerationModes />
      <LoadingIndicator />
      <FooterNavigation />
    </div>
  );
};

// 6. LoadingIndicator (Индикатор загрузки)
// Большой круглый прогресс в центре
// Таймер "12.33"
// Текст "Началась генерация первых четырёх изображений..."
// 7. FooterNavigation (Нижняя навигация)
// Кнопки "< Назад в Каталог"
// "Выйти & Удалить Всё" (красная)
// "Вперёд >"
// "Help" и "AIClub"
