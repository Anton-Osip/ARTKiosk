import { GenerateSection, Header } from '@/widgets';

export default function Generate() {
  return (
    <>
      <Header activeTab="creativity" />
      <GenerateSection withEmptyGeneration={true} />
    </>
  );
}
