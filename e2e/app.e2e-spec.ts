import { GolfScoreboardPage } from './app.po';

describe('golf-scoreboard App', () => {
  let page: GolfScoreboardPage;

  beforeEach(() => {
    page = new GolfScoreboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
