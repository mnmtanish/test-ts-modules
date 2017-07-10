import { ModuleCPage } from './app.po';

describe('module-c App', () => {
  let page: ModuleCPage;

  beforeEach(() => {
    page = new ModuleCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
