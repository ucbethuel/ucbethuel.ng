const socialVideos = [
  {
    platform: 'YouTube',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  },
  {
    platform: 'Instagram',
    embedUrl: 'https://www.instagram.com/p/XXXXXXXXXXX/embed',
  },
  {
    platform: 'Facebook',
    embedUrl: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/facebook/videos/10153231379946729/&show_text=0&autoplay=1',
  },
  {
    platform: 'TikTok',
    embedUrl: 'https://www.tiktok.com/embed/7234567890123456789',
  },
];

const SocialVideoCarousel = () => (
  <section className="container py-5">
    <h2 className="text-center mb-4">Social Media Highlights</h2>

    <div
      id="videoCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="5000"
    >
      <div className="carousel-inner">
        {socialVideos.map((video, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="d-flex justify-content-center">
              <div className="card shadow-sm" style={{ maxWidth: '720px', width: '100%' }}>
                <div className="ratio ratio-16x9">
                  <iframe
                    src={video.embedUrl}
                    title={video.platform}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{ border: 'none', borderRadius: '10px' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#videoCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </section>
);

export default SocialVideoCarousel;
