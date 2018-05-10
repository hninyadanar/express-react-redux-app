import React from 'react';
import { connect } from 'react-redux';
import PostList from '../components/PostList';
import actions from '../actions';
import NewPost from './NewPost';
import { Layout, Menu, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

class PostListData extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.likedPostsAction();
    }

    render() {
        const content = this.props.fetching ? <div> Fetching .... </div> : <PostList posts={this.props.posts} likedPosts={this.props.likedPosts} />;
        return (
            <Layout>
                <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['']}>
                        <Menu.Item key="1">
                            <Icon type="logout" />
                            <span className="nav-text">
                                <a href="/logout" onClick={this.handleClick}> Logout </a>
                            </span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="user" />
                            <span className="nav-text">profile</span>
                        </Menu.Item>
                    </Menu>
                </Sider>

                <Layout style={{ marginLeft: 200 }}>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <NewPost />
                        <div style={{ padding: 24, background: '#fff', textAlign: 'left' }}>
                            <h3>Posts</h3>

                            {content}
                        </div>
                    </Content>
                </Layout>

            </Layout>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    posts: state.rootReducer.posts.list,
    fetching: state.rootReducer.posts.fetching,
    fetched: state.rootReducer.posts.fetchSuccess,
    likedPosts: state.rootReducer.posts.likedPosts
})

const mapDispatchToProps = dispatch => ({
    fetchPosts: () => { dispatch(actions.postsFetchRequest()) },
    likedPostsAction: () => { dispatch(actions.likedPostsRequest()) },
    logout: () => { dispatch(actions.logoutRequest()) }
})


export default connect(
    mapStateToProps,
    mapDispatchToProps,
    //mapLogoutDispatchToProps
)(PostListData)