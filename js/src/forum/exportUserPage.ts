import app from "flarum/forum/app";
import UserPage, {IUserPageAttrs} from "flarum/forum/components/UserPage";
import ExtractText from "flarum/common/utils/extractText";
import Mithril from 'mithril';
import User from "flarum/common/models/User";
import ItemList from "flarum/common/utils/ItemList";
import FieldSet from "flarum/common/components/FieldSet";
import Button from "flarum/common/components/Button";


export default class UserExportPage<CustomAttrs extends IUserPageAttrs = IUserPageAttrs> extends UserPage<CustomAttrs> {
    discloseOnlineLoading?: boolean;
    user: User | null = null;

    oninit(vnode: Mithril.Vnode<CustomAttrs, this>) {
        super.oninit(vnode);
        const routeUsername = m.route.param("username");

        if(routeUsername !== app.session.user?.slug()){
            m.route.set("/");
        }

        this.show(app.session.user!);

        app.setTitle(ExtractText(app.translator.trans('bonfire8458-export-posts.forum.user.title')));
    }

    content() {
        return m("div[class=Settings-Export]",[
            FieldSet.component({
                label:app.translator.trans("bonfire8458-export-posts.forum.user.title"),
            }),
            m("form",[
                this.fields().toArray()
            ]),
        ]);

    }

    fields(){
        const items = new ItemList<Mithril.Children>();
        items.add("checkboxPost",m("label[class=checkbox]",[
            m("input[type=checkbox][checked=checked]"),
            app.translator.trans("bonfire8458-export-posts.forum.user.page.post")
        ]),-1);

        items.add("checkboxReply",m("label[class=checkbox]",[
            m("input[type=checkbox]"),
            app.translator.trans("bonfire8458-export-posts.forum.user.page.reply")
        ]),-2);

        // TODO: form need to add a url to the form. The address is " /api/{name}/export_posts "
        items.add(
            "ExportPostButton",
          Button.component({
                class: "Button Button--primary",
                type: "submit",
                loading: false,
            },
                app.translator.trans("bonfire8458-export-posts.forum.user.page.click"),
            ),
            -100
        );

        return items;
    }


}

