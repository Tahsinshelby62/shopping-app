import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <h1>Get Eclusive Offers in your Email</h1>
      <p>Subsscribe to our Newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email Id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
