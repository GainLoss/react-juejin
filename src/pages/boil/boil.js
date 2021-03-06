import React from 'react'
import Header from '@/common/header/header.js'
import {
    BoilCon,
    BoilLeft,
    BoilText,BoilTextArea,BoilTextBottom,BoilTextBottomItem,BoilTextBottomBtn,
    BoilHeader,BoilHeaderItem,
    BoilList,BoilConItem,BoilConLeft,BoilConRight,BoilConRightEvery,BoilConBottom,BoilConBottomItem,BoilConItemCon,
    BoilRight,BoilRightTop1,BoilRightTop2,BoilRightTop2Every,BoilRightTopic,BoilRightTopicTitle,BoilRightTopicTitleEvery,BoilRightTopicCon,BoilRightTopicConItem,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Boil extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <Header parentProp={this.props}/>
            <div style={{"backgroundColor":"#efefef"}}>
                <BoilCon>
                    <BoilLeft>
                        <BoilText>
                            <BoilTextArea></BoilTextArea>
                            <BoilTextBottom>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe633;</i>表情</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe66e;</i>图片</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe600;</i>链接</BoilTextBottomItem>
                                <BoilTextBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe678;</i>话题</BoilTextBottomItem>
                                <BoilTextBottomBtn>发布</BoilTextBottomBtn>
                            </BoilTextBottom>
                            
                        </BoilText>
                        <BoilHeader>
                            <BoilHeaderItem>推荐</BoilHeaderItem>
                            <BoilHeaderItem>动态</BoilHeaderItem>
                        </BoilHeader>
                        
                        <BoilList>
                            {

                                this.props.boli_list.map((item)=>{
                                if(!item.node){
                                    return
                                }
                                return (
                                    // <BoilConItem key={item.node.targets[0].id}></BoilConItem>
                                    <BoilConItem key={item.node.targets[0].id}>
                                        <BoilConItemCon>
                                            <BoilConLeft><img src={item.node.actors[0].avatarLarge} style={{'height':'100%','width':'100%'}}/></BoilConLeft>
                                            <BoilConRight>
                                                <BoilConRightEvery>{item.node.actors[0].username}</BoilConRightEvery>
                                                <BoilConRightEvery>{item.node.actors[0].company}|{item.node.actors.jobTitle}</BoilConRightEvery>
                                                <BoilConRightEvery>{item.node.targets[0].title}</BoilConRightEvery>
                                            </BoilConRight>
                                        </BoilConItemCon>
                                        <BoilConBottom>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe627;</i>{item.node.targets[0].likeCount}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe609;</i>{item.node.targets[0].commentsCount}</BoilConBottomItem>
                                            <BoilConBottomItem><i className="iconfont" style={{'marginRight':"5px"}}>&#xe645;</i>分享</BoilConBottomItem>
                                        </BoilConBottom>
                                    </BoilConItem>
                                )
                                })
                            }
                        </BoilList>
                    </BoilLeft>
                    <BoilRight>
                        <BoilRightTop1>
                            <img src='https://avatars.githubusercontent.com/u/17818212?v=3' style={{"width":"40px","width":"40px","margin":"20px"}}/>
                            <BoilRightTop2Every>zhangyx</BoilRightTop2Every>
                        </BoilRightTop1>
                        <BoilRightTop2>
                            <BoilRightTop2Every>沸点</BoilRightTop2Every>
                            <BoilRightTop2Every>关注</BoilRightTop2Every>    
                            <BoilRightTop2Every>关注者</BoilRightTop2Every>
                        </BoilRightTop2>
                        <BoilRightTopic>
                            <BoilRightTopicTitle>
                                <BoilRightTopicTitleEvery>关注的话题</BoilRightTopicTitleEvery>
                            </BoilRightTopicTitle>
                            <img style={{"float":"left","width":"40px","margin":"5px 10px 0px 5px"}} src="https://user-gold-cdn.xitu.io/2018/3/28/1626c1bc2798945c?imageView2/1/w/80/h/80/q/85/format/webp/interlace/1"/>
                            <BoilRightTopicConItem>每天一道算法题</BoilRightTopicConItem>
                        </BoilRightTopic>
                        <BoilRightTopic>
                            <BoilRightTopicTitle>
                                <BoilRightTopicTitleEvery>更多话题</BoilRightTopicTitleEvery>
                            </BoilRightTopicTitle>
                            {
                                this.props.topic.map((item)=>{
                                    if(!item.objectId){
                                        return
                                    }
                                    return (
                                        <BoilRightTopicCon key={item.objectId}>
                                            <img style={{"float":"left","width":"40px","margin":"5px 10px 0px 5px"}} src={item.icon}/>
                                            <BoilRightTopicConItem>{item.title}</BoilRightTopicConItem>
                                        </BoilRightTopicCon>
                                    )
                                })
                            }
                            
                        </BoilRightTopic>
                    </BoilRight>
                </BoilCon>
                
            </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.props.showTopicList()
    }
}
const mapStateToProps=(state)=>{
    return {
        boli_list:state.get('boil').get('boli_list'),
        user:state.get('boil').get('user'),
        topic:state.get('boil').get('topic'),
    }
}
const mapDispatchToProps=(dispatch)=>({
    showTopicList(){
        dispatch(actionCreators.showtopiclist())
        dispatch(actionCreators.getshowlist())
        dispatch(actionCreators.showuserlist())
    },
    clickChangeList(id){
        dispatch(actionCreators.getshowlist(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Boil)
