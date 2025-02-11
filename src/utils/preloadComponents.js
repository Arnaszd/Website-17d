export const preloadHomeComponents = () => {
  return Promise.all([
    import('../components/Hero'),
    import('../components/Stats'),
    import('../components/ArtistSlider'),
    import('../components/PlaylistSection'),
    import('../components/StatsMap')
  ]);
};

export const preloadImages = () => {
  const images = [
    '/images/discole.webp',
    '/images/cepaque.webp',
    // Add other commonly used images
  ];

  return Promise.all(
    images.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}; 