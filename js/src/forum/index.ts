import app from 'flarum/forum/app';
import addUserPageButton from './addUserPageButton';
export { default as extend } from './extend';

app.initializers.add('bonfire8458/flarum-export-posts', () => {
  addUserPageButton();
});