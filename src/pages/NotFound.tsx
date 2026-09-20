import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '@/content';
import { useTheme } from '@/hooks/use-theme';

const NotFound = () => {
  const location = useLocation();

  // This page renders outside the shell, so it applies the saved biome itself.
  useTheme();

  useEffect(() => {
    document.title = `${profile.name} — Page not found`;
    console.warn('404 — no route for', location.pathname);
  }, [location.pathname]);

  return (
    <main className="notfound">
      <div className="notfound__panel panel panel--raised">
        <span className="pixel-cube pixel-cube--lit" aria-hidden="true" />
        <p className="notfound__code">Error 404</p>
        <h1>Chunk not found</h1>
        <p className="notfound__text">
          Nothing generated at <code>{location.pathname}</code>. The world only has one spawn
          point.
        </p>
        <Link className="btn" to="/">
          Return to spawn
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
