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
    border: `2px solid ${colors.gray300}`,
    animation: 'pulse-pixel 1.5s steps(3) infinite',
    ...(variant === 'circle' ? { borderRadius: '50%' } : {}),
  };

  return <div style={style} className={className} />;
}

export function RecipeCardSkeleton() {
  const { colors } = useTheme();

  return (
    <div
      style={{
        backgroundColor: colors.cardBg,
        border: `3px solid ${colors.pixelBorder}`,
        boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
        overflow: 'hidden',
      }}
    >
      <Skeleton height="192px" />
      <div className="p-5 space-y-3">
        <Skeleton height="14px" width="70%" />
        <Skeleton height="12px" width="100%" />
        <Skeleton height="12px" width="60%" />
        <div className="flex justify-between pt-2">
          <Skeleton height="10px" width="40px" />
          <Skeleton height="30px" width="80px" />
        </div>
      </div>
    </div>
  );
}
