import MainPage from './';
import { shallow } from 'enzyme';

describe('Main page', () => {
  it('Should render correctly', () => {
    const component = shallow(<MainPage />);
    expect(component).toBeTruthy();
  });
});
