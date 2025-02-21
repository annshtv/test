import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

jest.mock('../Navbar/Navbar', () => () => <div>Navbar</div>);
jest.mock('../../UI/Buttons/ButtonSubscribe', () => (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => <button>{props.children}</button>);

describe('Header Component', () => {
  it('отображает заголовок с правильным текстом', () => {
    render(<Header />);
    const headerTitle = screen.getByText(/Your Daily Podcast/i);
    expect(headerTitle).toBeInTheDocument();
  });

  it('правильно разделяет заголовок и стилизует последнее слово', () => {
    render(<Header />);
    const lastWord = screen.getByText('Podcast');
    expect(lastWord).toHaveClass('last-word');
  });

  it('отображает подзаголовок с описанием', () => {
    render(<Header />);
    const subtitle = screen.getByText(/We cover all kinds of categories and/i);
    expect(subtitle).toBeInTheDocument();
  });

  it('отображает кнопку подписки', () => {
    render(<Header />);
    const subscribeButton = screen.getByText(/subscribe/i);
    expect(subscribeButton).toBeInTheDocument();
  });

  it('отображает правильное количество изображений-обложек', () => {
    render(<Header />);
    const coverImages = screen.getAllByRole('img');
    expect(coverImages).toHaveLength(5);
  });

  it('правильно отображает платформы поддержки', () => {
    render(<Header />);
    const spotifyIcon = screen.getByAltText('Spotify');
    const googleIcon = screen.getByAltText('Google');
    const youtubeIcon = screen.getByAltText('Youtube');
    
    expect(spotifyIcon).toBeInTheDocument();
    expect(googleIcon).toBeInTheDocument();
    expect(youtubeIcon).toBeInTheDocument();
  });

  it('отображает компонент Navbar', () => {
    render(<Header />);
    const navbar = screen.getByText('Navbar');
    expect(navbar).toBeInTheDocument();
  });
});
