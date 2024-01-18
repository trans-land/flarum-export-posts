import User from 'flarum/common/models/User';
import Extend from 'flarum/common/extenders';
import UserExportPage from './ExportUserPage';

export default [
    new Extend.Routes().add('user.export','/u/:username/export',UserExportPage),
];

