import { FC } from 'react';

interface Props {
  text: string[];
}

const LegalDocument: FC<Props> = ({ text }) => {
  return (
    <div>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
};

export default LegalDocument;