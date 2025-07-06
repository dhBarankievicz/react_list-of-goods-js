import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

// Função para comparar os arrays (valores e ordem)
const areArraysEqual = (a, b) =>
  a.length === b.length && a.every((item, index) => item === b[index]);

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sort, setSort] = useState('');
  const [isReversed, setIsReversed] = useState(false);

  const reset = () => {
    setGoods(goodsFromServer);
    setSort('');
    setIsReversed(false);
  };

  const sortAlphabetically = () => {
    setGoods([...goods].sort((a, b) => a.localeCompare(b)));
    setSort('sortAlphabetically');
    setIsReversed(false);
  };

  const sortByLength = () => {
    setGoods([...goods].sort((a, b) => a.length - b.length));
    setSort('sortByLength');
    setIsReversed(false);
  };

  const reverse = () => {
    const reversedGoods = [...goods].reverse();

    setGoods(reversedGoods);
    setSort('sortReverse');
    setIsReversed(!isReversed);
  };

  const resetButtonVisible = !areArraysEqual(goods, goodsFromServer);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sort !== 'sortAlphabetically',
          })}
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-success', {
            'is-light': sort !== 'sortByLength',
          })}
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-warning', {
            'is-light': sort !== 'sortReverse',
          })}
          onClick={reverse}
        >
          Reverse
        </button>

        {resetButtonVisible && (
          <button type="button" className="button is-danger" onClick={reset}>
            Reset
          </button>
        )}
      </div>

      <ul>
        {goods.map(good => (
          <li data-cy="Good" key={good}>
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
