import type { CSSProperties } from 'react';
import { useTheme } from '../../context/ThemeContext';

interface SkeletonProps {
  width?: string;
  height?: string;
  className?: string;
  variant?: 'text' | 'rect' | 'circle';
}

export default function Skeleton({
  width = '100%',
  height = '20px',
  className = '',
  variant = 'rect',
}: SkeletonProps) {
  const { colors } = useTheme();

  const style: CSSProperties = {
    width,
    height,
    backgroundColor: colors.gray200,
    borderRadius: variant === 'circle' ? '50%' : '12px',
    animation: 'pulse-pixel 1.5s ease-in-out infinite',
  };

  return <div style={style} className={className} />;
}

export function RecipeCardSkeleton() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        borderRadius: '20px',
        overflow: 'hidden',
        border: `2px solid ${colors.gray200}`,
      }}
    >
      <Skeleton height="180px" className="!rounded-none" />
      <div className="px-5 pb-5 pt-3 space-y-3">
        <Skeleton height="16px" width="75%" />
        <Skeleton height="12px" width="100%" />
        <Skeleton height="12px" width="50%" />
        <div className="flex justify-between items-center pt-2">
          <Skeleton height="14px" width="60px" />
          <Skeleton height="28px" width="80px" className="!rounded-full" />
        </div>
      </div>
    </div>
  );
}
