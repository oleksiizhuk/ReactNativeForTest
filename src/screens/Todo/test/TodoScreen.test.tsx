import { render } from '@testing-library/react-native'
import { TodoScreen } from '../TodoScreen'
import { initialState } from '../../../store/reducers/todo'

const mockState = {
  todo: initialState,
}
jest.mock('react-redux', () => ({
  useDispatch: jest.fn(() => jest.fn()),
  useSelector: jest.fn((selector) => selector(mockState)),
}))
describe('TodoScreen', () => {
  it('Should match snapshot', () => {
    const tree = render(<TodoScreen />)
    expect(tree).toMatchSnapshot()
  })
})
