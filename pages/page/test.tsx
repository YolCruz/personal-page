export default function Test() {
  return (
    <div className="w-screen max-w-full min-h-screen">
      <div>
        <a
          className="twitter-share-button"
          href={`https://twitter.com/intent/tweet?hashtags=quotes,anime&text`}
          target="_blank"
          rel="noreferrer"
          data-size="large"

        >
          Tweet
        </a>
      </div>
      <p>Hello world!</p>
    </div>
  );
}
