import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'

test('Test Home 3 products', async () => {
  render(<Home />)
  const headings = await screen.findAllByRole('heading');
  expect(headings).toHaveLength(3);

})

test('Test Click should load more', async () => {
  render(<Home />)
  const headings = await screen.findAllByRole('heading');
  const button = await screen.findByRole('button', {
    name: /load more/i
  })

  await userEvent.click();
  await waitFor(async() => {
    const headings = await screen.findAllByRole('heading');
    expect(headings).toHaveLength(12);
  })
});

test('Form Submit', () => {
  const mock = jest.fn();

  render(<Home signUp={mock} />)
  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  userEvent.click(nameInput);
  userEvent.keyboard('Tosh');

  userEvent.click(emailInput);
  userEvent.keyboard('tosh.koevoets@gmail.com');


  expext(mock).toHaveBeenCalled();
  expext(mock).toHaveBeenCalledWith({
    
  });

})

describe('Home', () => {
  it('Renders a heading', () => {
    render(<Home />)

    const heading = screen.getByTestId('main-heading');
    expect(heading).toBeInTheDocument();

    expect(heading).toHaveDescription()
  });

  it('Renders a Logo', () => {
    render(<Home />)

    const logo = document.querySelector('.main-logo');
    console.log('logo', logo)
    expect(logo).toBeTruthy();
  })

  it('Renders Products', () => {
    render(<Home />)

    const logo = document.querySelector('.main-logo');
    console.log('logo', logo)
    expect(logo).toBeTruthy();
  })
});