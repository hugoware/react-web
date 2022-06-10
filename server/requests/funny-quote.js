
export function define(app) {

  const QUOTES = [
    'I intend to live forever. So far, so good. ~ Steven Wright',
    'Tomorrow is often the busiest day of the week. ~ Spanish proverb',
    'When I was a kid my parents moved a lot, but I always found them. ~ Rodney Dangerfield',
    'Rice is great when you’re hungry and you want 2000 of something. ~ Mitch Hedberg',
    'Life is short. Smile while you still have teeth. ~ Unknown',
    'I remixed a remix, it was back to normal. ~ Mitch Hedberg',
    'The best way to teach your kids about taxes is by eating 30 percent of their ice cream. ~ Bill Murray',
    'I’m writing a book. I’ve got the page numbers done. ~ Steven Wright',
  ];

  function getQuote() {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)]
  }

  async function handle(request, response) {
    response.json({
      success: true,
      quote: getQuote()
    });
  }

  app.all('/funny-quote', handle);
}