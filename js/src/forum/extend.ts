import User from 'flarum/common/models/User';
import Extend from 'flarum/common/extenders';
import UserExportPage from './exportUserPage';

export default [
    new Extend.Routes().add('user.export','/u/:username/export',UserExportPage),
];

