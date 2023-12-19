import { HomePage } from "../../support/page_objects/home-page.page";

const home = new HomePage();;

describe('Test', () => {
    home.inputFilterByName().type('textates');
    home.btnFilterByName();
})