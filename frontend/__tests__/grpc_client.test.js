import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { pingServer } from '../src/grpc-client';
import App from '../src/App';

jest.mock('../src/grpc-client', () => ({
  pingServer: jest.fn(),
}));

describe('pingServer function', () => {
  it('resolves with expected response', async () => {
    pingServer.mockResolvedValue('Pong!');
    
    const response = await pingServer('Hello');
    expect(response).toBe('Pong!');
  });

  it('handles errors correctly', async () => {
    pingServer.mockRejectedValue(new Error('Network error'));
    
    await expect(pingServer('Hello')).rejects.toThrow('Network error');
  });
});

describe('App Component', () => {
  it('renders input and button', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('Enter a message')).toBeInTheDocument();
    expect(screen.getByText('Ping')).toBeInTheDocument();
  });

  it('handles successful ping response', async () => {
    pingServer.mockResolvedValue('Pong!');
    
    render(<App />);
    const input = screen.getByPlaceholderText('Enter a message');
    const button = screen.getByText('Ping');
    
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.click(button);
    
    expect(await screen.findByText('Pong!')).toBeInTheDocument();
  });
});
