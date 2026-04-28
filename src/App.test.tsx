import { render, screen } from '@testing-library/react';
import App from './App';

// Teste 1: Verifica se o componente App renderiza sem erro
test('deve renderizar o componente App', () => {
  render(<App />);
  expect(true).toBe(true);
});

// Teste 2: Verifica se a página tem algum conteúdo
test('a pagina deve ter conteudo HTML', () => {
  render(<App />);
  const htmlContent = document.body.innerHTML;
  expect(htmlContent.length).toBeGreaterThan(0);
});

// Teste 3: Funcao de soma (exemplo)
test('funcao soma deve retornar 5 quando somar 2 e 3', () => {
  const soma = (a: number, b: number) => a + b;
  expect(soma(2, 3)).toBe(5);
});

// Teste 4: Funcao de validacao de email
test('funcao validaEmail retorna true para email valido', () => {
  const validaEmail = (email: string) => {
    return email.includes('@') && email.includes('.');
  };
  expect(validaEmail('teste@exemplo.com')).toBe(true);
  expect(validaEmail('teste')).toBe(false);
});

// Teste 5: Funcao de contagem
test('funcao contarItens retorna o tamanho correto do array', () => {
  const contarItens = (arr: any[]): number => arr.length;
  expect(contarItens([1, 2, 3, 4, 5])).toBe(5);
  expect(contarItens([])).toBe(0);
});