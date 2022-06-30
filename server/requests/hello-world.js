
export function define(app) {

  async function handle(request, response) {
    response.json({
      success: true,
      message: 'hello world!'
    });
  }

  app.all('/hello', handle);
}