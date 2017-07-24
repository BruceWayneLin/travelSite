import { TravelSitePage } from './app.po';

describe('travel-site App', () => {
  let page: TravelSitePage;

  beforeEach(() => {
    page = new TravelSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
