import { FireB3Page } from './app.po';

describe('fire-b3 App', function() {
  let page: FireB3Page;

  beforeEach(() => {
    page = new FireB3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
