
const mockContributions = [
  // Simple array to represent 30 days of contributions (0-5 commits)
  3, 1, 0, 4, 5, 2, 1, 0, 3, 4,
  2, 0, 0, 1, 2, 3, 5, 4, 3, 2,
  0, 1, 3, 5, 4, 2, 1, 0, 0, 3,
];

const ContributionSquare = ({ count }) => {
  // Color scale based on count (like GitHub green intensity)
  const getColor = (count) => {
    if (count === 0) return '#ebedf0';
    if (count <= 1) return '#c6e48b';
    if (count <= 2) return '#7bc96f';
    if (count <= 4) return '#239a3b';
    return '#196127';
  };

  return (
    <div
      title={`${count} contributions`}
      style={{
        width: 15,
        height: 15,
        backgroundColor: getColor(count),
        margin: 2,
        borderRadius: 3,
        cursor: 'default',
      }}
    />
  );
};

const GithubContributions = ({ username = 'ucbethuel' }) => {
  return (
    <section className="container py-5">
      <h2 className="text-center mb-4">GitHub Contributions</h2>

      <div className="d-flex flex-wrap justify-content-center" style={{ maxWidth: 320, margin: '0 auto' }}>
        {mockContributions.map((count, idx) => (
          <ContributionSquare key={idx} count={count} />
        ))}
      </div>

      <div className="text-center mt-3">
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-dark"
        >
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default GithubContributions;
