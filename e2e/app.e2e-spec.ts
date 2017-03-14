import { StoppUhrPage } from './app.po';

describe('stopp-uhr App', () => {
  let page: StoppUhrPage;

  beforeEach(() => {
    page = new StoppUhrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
