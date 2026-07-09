const featuredBooks = [
  {
    title: "The Silent Horizon",
    author: "Ava Morgan",
    genre: "Fiction",
    description:
      "A reflective journey through memory, time, and forgotten places.",
  },
  {
    title: "Garden of Ideas",
    author: "Noah Reed",
    genre: "Inspiration",
    description:
      "An elegant collection of essays on creativity and everyday wonder.",
  },
  {
    title: "Maps of the Moon",
    author: "Lina Brooks",
    genre: "Adventure",
    description:
      "A vivid tale of exploration, courage, and the stories we leave behind.",
  },
];

const categories = ["Fiction", "History", "Science", "Poetry", "Children"];

function HomePage() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h>Discover calm, knowledge, and stories in one place.</h>
          <p className="hero-text">
            A peaceful digital library experience for readers who enjoy timeless
            books and thoughtful browsing.
          </p>
          <a className="primary-link" href="#collection">
            Explore Books
          </a>
        </div>
      </header>

      <main>
        <section className="section-card" id="collection">
          <div className="section-heading">
            <p className="eyebrow">Featured Collection</p>
            <h2>Popular books this month</h2>
          </div>
          <div className="book-grid">
            {featuredBooks.map((book) => (
              <article key={book.title} className="book-card">
                <p className="book-genre">{book.genre}</p>
                <h3>{book.title}</h3>
                <p className="book-author">by {book.author}</p>
                <p>{book.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-card">
          <div className="section-heading">
            <p className="eyebrow">Browse by Topic</p>
            <h2>Find your next favorite read</h2>
          </div>
          <div className="chip-row">
            {categories.map((category) => (
              <span key={category} className="chip">
                {category}
              </span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export { HomePage };
