import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import actions from '../actions';
import cookie from 'js-cookie'
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Avatar, Row, Col, Tooltip } from 'antd';

import NewPost from './NewPost';
import Profile from './ProfileData';
import Posts from './PostListData';
import Detail from './PostDetail';

const { Header, Content, Footer, Sider } = Layout;

class MainHeader extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.clickMenuItem = this.clickMenuItem.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    clickMenuItem(item) {
        this.props.changeComponent(item);
        if (item == 1) {
            this.props.history.push("/posts");
        }
        if (item == 2) {
            this.props.history.push("/profile");
        }
        
    }

    render() {
        const userId = cookie.get('userId');
        const contentData = this.props.content;
        return (
            <Layout>

                <Header>
                    <div>
                        <Row >
                            <Col span={20} push={24} >
                                <Link to="/logout" onClick={this.handleClick} >
                                    <Tooltip title="Logout">
                                        <Icon type="logout" style={{ fontSize: 20 }} />
                                    </Tooltip> </Link>
                            </Col>
                            <Col span={4} pull={20} >
                                <Avatar size="large" src={`/api/user/profile/${userId}`} />
                            </Col>
                        </Row>
                    </div>
                </Header>

                <Layout style={{ marginLeft: 200 }}>

                    <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                        <div className="logo" />
                        <Menu
                            onClick={item => { this.clickMenuItem(item.key); }}
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={[this.props.currentComponent]}>
                            <Menu.Item key="1">
                                <Icon type="home" /> Home
                        </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="user" /> Profile
                        </Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ margin: '24px 16px 0', overflow: 'initial', height: '80vh' }}>
                        {contentData}
                    </Content>

                </Layout>

            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currentComponent: state.rootReducer.main.currentComponent,
})

const mapDispatchToProps = dispatch => ({
    logout: () => { dispatch(actions.logoutRequest()) },
    changeComponent: (item) => { dispatch(actions.changeContent(item)) },
});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainHeader)