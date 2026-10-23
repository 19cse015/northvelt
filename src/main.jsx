import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const VIDEO_PATH = "/videos/clothing-production.mp4";

const categories = [
  { name: "T-Shirts", subtitle: "Everyday essentials", image: "photo-1521572163474-6864f9cf17ab" },
  { name: "Shirts", subtitle: "Smart and versatile", image: "photo-1596755094514-f87e34085b2c" },
  { name: "Trousers", subtitle: "Made to move", image: "photo-1473966968600-fa801b869a1a" },
  { name: "Jackets", subtitle: "Layer with confidence", image: "photo-1551028719-00167b16eac5" },
];

const products = [
  { id: 1, name: "Essential Cotton Tee", category: "T-Shirts", price: 890, oldPrice: 1090, tag: "BESTSELLER", image: "photo-1521572163474-6864f9cf17ab" },
  { id: 2, name: "Everyday Oxford Shirt", category: "Shirts", price: 1490, oldPrice: null, tag: "NEW", image: "photo-1596755094514-f87e34085b2c" },
  { id: 3, name: "Relaxed Fit Trousers", category: "Trousers", price: 1790, oldPrice: null, tag: "POPULAR", image: "photo-1473966968600-fa801b869a1a" },
  { id: 4, name: "Modern Utility Jacket", category: "Jackets", price: 2890, oldPrice: 3290, tag: "LIMITED", image: "photo-1551028719-00167b16eac5" },
  { id: 5, name: "Classic Everyday Tee", category: "T-Shirts", price: 950, oldPrice: null, tag: "NEW", image: "photo-1503342217505-b0a15ec3261c" },
  { id: 6, name: "Minimal Casual Shirt", category: "Shirts", price: 1590, oldPrice: null, tag: "", image: "photo-1603252109303-2751441dd157" },
  { id: 7, name: "Urban Straight Jeans", category: "Trousers", price: 2190, oldPrice: null, tag: "POPULAR", image: "photo-1542272604-787c3835535d" },
  { id: 8, name: "Everyday Layer Jacket", category: "Jackets", price: 3190, oldPrice: null, tag: "", image: "photo-1544923246-77307dd654cb" },
];

const imageUrl = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

const money = (amount) => `৳${amount.toLocaleString("en-BD")}`;

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function Header({ cartCount }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="NORTHVELT home">
        
        <img
          className="navbar-logo"
          src="/images/northvalt2.jpg"
          alt="NORTHVELT — Elevate Your Everyday"
        />
     
        <span className="brand-name">NORTHVELT</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#shop" onClick={closeMenu}>Shop</a>
        <a href="#about" onClick={closeMenu}>Our Story</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cart" href="#shop" onClick={closeMenu}>
          Bag <span className="cart-count">{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> MADE FOR YOUR EVERYDAY</p>
        <h1>Wear your<br /><em>own direction.</em></h1>
        <p className="hero-description">
          Thoughtful essentials. Modern silhouettes. Everyday pieces designed
          to move with you.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#shop">Explore Collection <ArrowIcon /></a>
          <a className="text-link" href="#about">Discover NORTHVELT</a>
        </div>
        <div className="hero-footnote">
          <span className="footnote-dot" />
          <span>EVERYDAY STYLE, CONSIDERED.</span>
        </div>
      </div>

      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={imageUrl("photo-1512436991641-6745cdb1723f", 1200)}
          aria-label="Garment production and clothing craftsmanship"
        >
          <source src={VIDEO_PATH} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <div className="hero-video-shade" />
        <div className="video-label">
          <span className="video-label-dot" />
          <span>BEHIND THE CRAFT</span>
        </div>
        <div className="video-caption">
          <span>01 / CRAFT &amp; QUALITY</span>
          <span>Made with intention.</span>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>DESIGNED FOR DAILY LIFE</span>
        <span>QUALITY IN EVERY DETAIL</span>
        <a href="#categories">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description, link, linkText = "View all" }) {
  return (
    <div className="section-heading">
      <div>
        {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
        <h2>{title}</h2>
        {description && <p className="section-description">{description}</p>}
      </div>
      {link && <a className="section-link" href={link}>{linkText} <ArrowIcon /></a>}
    </div>
  );
}

function Categories() {
  return (
    <section className="section categories-section" id="categories">
      <SectionHeading
        eyebrow="FIND YOUR FIT"
        title="Shop by category"
        description="Everyday staples, built around your style."
        link="#shop"
        linkText="Shop all"
      />
      <div className="category-grid">
        {categories.map((category, index) => (
          <a className="category-card" href="#shop" key={category.name}>
            <div className="category-image-wrap">
              <img src={imageUrl(category.image, 700)} alt={category.name} loading="lazy" />
              <span className="category-index">0{index + 1}</span>
              <span className="category-arrow"><ArrowIcon /></span>
            </div>
            <div className="category-info">
              <div>
                <h3>{category.name}</h3>
                <p>{category.subtitle}</p>
              </div>
              <span className="category-chevron">↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={imageUrl(product.image, 800)} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button
          className="quick-add"
          type="button"
          onClick={() => onAdd(product)}
          aria-label={`Add ${product.name} to bag`}
        >
          + Add to bag
        </button>
      </div>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <div className="product-prices">
          <span>{money(product.price)}</span>
          {product.oldPrice && <del>{money(product.oldPrice)}</del>}
        </div>
      </div>
    </article>
  );
}

function Shop({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const matchesCategory = activeCategory === "All" || product.category === activeCategory;
      const matchesSearch = !term || `${product.name} ${product.category}`.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <section className="section shop-section" id="shop">
      <SectionHeading
        eyebrow="THE NORTHVELT EDIT"
        title="Pieces worth keeping."
        description="Easy-to-wear essentials for wherever the day takes you."
      />

      <div className="shop-toolbar">
        <div className="filter-list" aria-label="Filter products by category">
          {["All", "T-Shirts", "Shirts", "Trousers", "Jackets"].map((category) => (
            <button
              type="button"
              key={category}
              className={`filter-button ${activeCategory === category ? "filter-active" : ""}`}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
            </button>
          ))}
        </div>
        <label className="product-search">
          <span className="search-icon">⌕</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Find a piece..."
            aria-label="Search products"
          />
        </label>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h3>No pieces found</h3>
          <p>Try another search or choose a different category.</p>
          <button className="button button-dark" onClick={() => { setSearch(""); setActiveCategory("All"); }} type="button">
            Clear filters
          </button>
        </div>
      )}
      <p className="demo-note">Demo products and prices — replace these with your real store inventory.</p>
    </section>
  );
}

function Story() {
  return (
    <section className="story-section" id="about">
      <div className="story-image">
        <img
          src={imageUrl("photo-1483985988355-763728e1935b", 1200)}
          alt="Contemporary everyday fashion"
          loading="lazy"
        />
        <div className="story-image-note">THE NORTHVELT APPROACH · 2026</div>
      </div>
      <div className="story-copy">
        <p className="section-eyebrow">A LITTLE ABOUT US</p>
        <h2>Less noise.<br /><em>More meaning.</em></h2>
        <p>
          NORTHVELT is built around a simple idea: the clothes you reach for
          most should feel right, look considered, and fit into real life.
        </p>
        <p>
          We believe good style doesn't need to shout. It lives in thoughtful
          details, dependable comfort, and pieces you can make your own.
        </p>
        <a className="text-link text-link-light" href="#contact">Get to know us <ArrowIcon /></a>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { number: "01", title: "Considered design", text: "Clean shapes and versatile styles that work beyond a single season." },
    { number: "02", title: "Everyday comfort", text: "Wearable pieces designed to feel as good as they look." },
    { number: "03", title: "Attention to detail", text: "A focus on finish, fit, and the small things that matter." },
  ];

  return (
    <section className="section values-section">
      <SectionHeading
        eyebrow="OUR PROMISE"
        title="Good basics. Better details."
        description="The principles behind every NORTHVELT collection."
      />
      <div className="values-grid">
        {values.map((value) => (
          <article className="value-card" key={value.number}>
            <span className="value-number">{value.number}</span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  return (
    <section className="newsletter-section" id="contact">
      <div>
        <p className="section-eyebrow">STAY IN THE LOOP</p>
        <h2>A good thing, <em>occasionally.</em></h2>
        <p>Get updates on new arrivals, fresh edits, and what's happening at NORTHVELT.</p>
      </div>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(event) => { setEmail(event.target.value); setSubmitted(false); }}
          required
        />
        <button type="submit" aria-label="Subscribe to newsletter"><ArrowIcon /></button>
        {submitted && <p className="form-message">Thanks! This demo form is ready to connect to your mailing service.</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-column">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">N<span>V</span></span>
            <span className="brand-name">NORTHVELT</span>
          </a>
          <p>Modern essentials for your own direction.</p>
        </div>
        <div className="footer-column">
          <h3>EXPLORE</h3>
          <a href="#shop">Shop all</a>
          <a href="#categories">Categories</a>
          <a href="#about">Our story</a>
        </div>
        <div className="footer-column">
          <h3>HELP</h3>
          <a href="#contact">Contact us</a>
          <a href="#contact">Shipping information</a>
          <a href="#contact">Returns &amp; exchanges</a>
        </div>
        <div className="footer-column">
          <h3>FOLLOW ALONG</h3>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook ↗</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} NORTHVELT. All rights reserved.</span>
        <span>MADE FOR EVERYDAY LIFE.</span>
      </div>
    </footer>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [notice, setNotice] = useState("");

  function handleAdd(product) {
    setCartCount((count) => count + 1);
    setNotice(`${product.name} added to your demo bag.`);
    window.setTimeout(() => setNotice(""), 2600);
  }

  return (
    <>
      <Header cartCount={cartCount} />
      <main>
        <Hero />
        <Categories />
        <Shop onAdd={handleAdd} />
        <Story />
        <Values />
        <Newsletter />
      </main>
      <Footer />
      {notice && <div className="toast-message" role="status">{notice}</div>}
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
