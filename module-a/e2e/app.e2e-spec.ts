import { ModuleAPage } from './app.po';

describe('module-a App', () => {
  let page: ModuleAPage;

  beforeEach(() => {
    page = new ModuleAPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
