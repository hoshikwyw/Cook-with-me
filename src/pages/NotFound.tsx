import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { fonts } from '../themes/font';
import { Container, Button } from '../components/common';

export default function NotFound() {
  const { colors } = useTheme();

  return (
    <div style={{ backgroundColor: colors.bgPrimary }} className="min-h-[70vh] flex items-center justify-center pixel-hearts">
      <Container>
        <div className="text-center space-y-5 max-w-md mx-auto px-4">
          <div
            style={{ ...fonts.heroTitle, color: colors.primaryPastel, fontSize: undefined }}
            className="text-5xl sm:text-7xl"
          >
            404
          </div>
          <div className="text-4xl">🍳</div>
          <h1
            style={{ ...fonts.h2, color: colors.textPrimary, fontSize: undefined }}
            className="text-sm sm:text-base"
          >
            Page Not Found
          </h1>
          <p
            style={{ color: colors.textMuted, fontFamily: "'Nunito', sans-serif", lineHeight: '1.7' }}
            className="text-xs sm:text-sm"
          >
            Oops! This page must have wandered off to the kitchen. Let's get you back to somewhere delicious.
          </p>
          <div className="flex gap-3 justify-center pt-2">
            <Link to="/">
              <Button variant="primary" size="md">GO HOME</Button>
            </Link>
            <Link to="/recipes">
              <Button variant="outline" size="md">RECIPES</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
