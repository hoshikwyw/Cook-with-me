import { useState, useRef, useEffect, type CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '../../context/ThemeContext';
import { fonts } from '../../themes/font';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Select({ label, options, value, onChange, placeholder = 'Select...' }: SelectProps) {
  const { colors } = useTheme();
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 0 });

  const selected = options.find((o) => o.value === value);

  // Position dropdown relative to trigger
  useEffect(() => {
    if (open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({
        top: rect.bottom + 4 + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        triggerRef.current && !triggerRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on scroll (optional, prevents stale position)
  useEffect(() => {
    if (!open) return;
    const handler = () => setOpen(false);
    window.addEventListener('scroll', handler, true);
    return () => window.removeEventListener('scroll', handler, true);
  }, [open]);

  const labelStyle: CSSProperties = {
    ...fonts.h4,
    color: colors.textPrimary,
    display: 'block',
    marginBottom: '8px',
    fontSize: undefined,
  };

  return (
    <div className="relative">
      {label && <label style={labelStyle} className="text-[9px] sm:text-[11px]">{label}</label>}

      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(!open)}
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontSize: '14px',
          backgroundColor: colors.cardBg,
          border: `2px solid ${open ? colors.primary : colors.pixelBorder}`,
          boxShadow: open ? `2px 2px 0px ${colors.primary}` : `2px 2px 0px ${colors.pixelBorder}`,
          padding: '10px 14px',
          width: '100%',
          textAlign: 'left',
          color: selected ? colors.textPrimary : colors.textMuted,
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span>{selected ? selected.label : placeholder}</span>
        <svg
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke={colors.textMuted} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s ease', transform: open ? 'rotate(180deg)' : 'rotate(0)' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown — rendered via portal to escape overflow:hidden parents */}
      {open && createPortal(
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: pos.top,
            left: pos.left,
            width: pos.width,
            zIndex: 9999,
            backgroundColor: colors.cardBg,
            border: `2px solid ${colors.pixelBorder}`,
            boxShadow: `4px 4px 0px ${colors.pixelBorder}`,
            maxHeight: '220px',
            overflowY: 'auto',
          }}
          className="animate-slide-down"
        >
          {options.map((option) => {
            const isActive = option.value === value;
            return (
              <button
                key={option.value}
                type="button"
                onClick={() => { onChange(option.value); setOpen(false); }}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '14px',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 14px',
                  backgroundColor: isActive ? colors.primaryPastel : 'transparent',
                  color: isActive ? colors.primary : colors.textPrimary,
                  border: 'none',
                  borderBottom: `1px solid ${colors.gray200}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.1s ease',
                  fontWeight: isActive ? 700 : 400,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget).style.backgroundColor = colors.gray100;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget).style.backgroundColor = 'transparent';
                }}
              >
                <span>{option.label}</span>
                {isActive && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>,
        document.body,
      )}
    </div>
  );
}
