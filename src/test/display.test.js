import renderer from 'react-test-renderer';
import Display from '../components/display';

it('renders correctly', () => {
  const tree = renderer
    .create(<Display />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
