import { RaphaeldiragoPage } from './app.po';

describe('raphaeldirago App', function() {
  let page: RaphaeldiragoPage;

  beforeEach(() => {
    page = new RaphaeldiragoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
