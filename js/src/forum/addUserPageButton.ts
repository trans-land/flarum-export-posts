import app from "flarum/forum/app";
import { extend } from "flarum/common/extend"; 
import UserPage from "flarum/forum/components/UserPage";
import LinkButton from "flarum/common/components/LinkButton";

export default function addUserPageButton(){
    extend(UserPage.prototype,'navItems',function(items){
        if (app.session.user && this.user === app.session.user){
            items.add(
                "export",
                LinkButton.component({
                    href: app.route('user.export',{
                        username: this.user.slug(),
                    }),
                    name: 'export',
                    icon: 'fas fa-download',
                },
                app.translator.trans("bonfire8458-export-posts.forum.user.export")
                ),
                -101
            );
        }
    });
}