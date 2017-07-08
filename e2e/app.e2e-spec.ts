import { RiverGraphPage } from './app.po';

describe('river-graph App', () => {
  let page: RiverGraphPage;

  beforeEach(() => {
    page = new RiverGraphPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
