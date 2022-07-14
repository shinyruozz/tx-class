import Vue from "vue";
import {
    Button,
    Message,
    FormItem,
    Form,
    Input,
    Container,
    Header,
    MessageBox,
    Aside,
    Menu,
    MenuItem,
    Submenu,
    Main,
    Table,
    TableColumn,
    Pagination,
    Card,
    Breadcrumb,
    BreadcrumbItem,
    Select,
    Option,
    Upload,
    Descriptions,
    DescriptionsItem,
} from "element-ui";

Vue.use(Button)
    .use(FormItem)
    .use(Form)
    .use(Input)
    .use(Select)
    .use(Option)
    .use(Container)
    .use(Header)
    .use(Aside)
    .use(Menu)
    .use(MenuItem)
    .use(Submenu)
    .use(Main)
    .use(Table)
    .use(TableColumn)
    .use(Pagination)
    .use(Card)
    .use(Breadcrumb)
    .use(BreadcrumbItem)
    .use(Upload)
    .use(Descriptions)
    .use(DescriptionsItem);
Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;