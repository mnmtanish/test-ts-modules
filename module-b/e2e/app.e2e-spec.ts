import { ModuleBPage } from './app.po';

describe('module-b App', () => {
  let page: ModuleBPage;

  beforeEach(() => {
    page = new ModuleBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
