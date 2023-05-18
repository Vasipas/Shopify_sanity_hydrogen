import {clsx} from 'clsx';

type TAboutSectionProps = {
  content: string;
};

export const AboutSection = ({content}: TAboutSectionProps) => {
  return (
    <div
      className={clsx(
        'text-xl',
        'flex[column]',
        'align-center',
        'text-center',
        'bg-stone-400',
        'w-full',
        'pt-5',
        'h-48',
        'gap-5',
      )}
    >
      <p className={clsx('text-2xl', 'mb-5')}>About</p>
      <span className={clsx('text-')}>{content}</span>
    </div>
  );
};
