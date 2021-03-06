import React from 'react'
import Header from '@/common/header/header.js'
import {Link} from 'react-router-dom'
import {
    HomeCon,
    HomeHeader,HomeHeaderItem,
    BookletCon,
    BookletLeft,BookletLeftItem,BookletLeftItemRight,BookletLeftItemRightTop,BookletLeftItemLeft,
    BookletRight,BookletRightItem,BookletRightBottom,
    
} from './style.js'
import {connect} from 'react-redux'
import {actionCreators} from './store'

class Booklet extends React.Component{
    render(){
        return(
            <React.Fragment>
            <Header parentProp={this.props} key="1"/>
            <div style={{"backgroundColor":"#efefef"}}>
                <HomeCon>
                    <HomeHeader>
                        <HomeHeader className="homeHeader">
                        {
                            this.props.homeheader.map((item)=>{
                                
                                if(!item.id){
                                    return;
                                }
                                var id=item.id;
                                return <HomeHeaderItem key={item.id} onClick={()=>this.props.clickChangeList(id)} key={item.id}><Link to={{pathname:'/juejin/booklet/'+id}}>{item.val}</Link></HomeHeaderItem>
                            })
                        }
                        </HomeHeader>
                    </HomeHeader>
                   <BookletCon>
                       <BookletLeft>
                           {
                               this.props.list.map((item)=>{
                                   
                                    if(!item.userData||!item.userData.username){
                                        return;
                                    }
                                    return (
                                        <BookletLeftItem key={item.id}>
                                            <BookletLeftItemLeft><img style={{"width":"100%","height":"100%"}} src={item.img}/></BookletLeftItemLeft>
                                            <BookletLeftItemRight>
                                                <BookletLeftItemRightTop style={{"fontSize":"20px",}}>{item.title}</BookletLeftItemRightTop>
                                                <BookletLeftItemRightTop style={{"fontSize":"15px","height":"23px","color":"#7d7c7c",'overflow':"hidden","whiteSpace":"nowrap","textOverflow":"ellipsis"}}>{item.desc}</BookletLeftItemRightTop>
                                                <BookletLeftItemRightTop style={{"fontSize":"13px","height":"23px","color":"#7d7c7c"}}>{item.userData.username||''}&nbsp;●&nbsp;{item.userData.company}</BookletLeftItemRightTop>
                                                <BookletLeftItemRightTop style={{"color":"#a09f9f"}}>￥:{item.price}&nbsp;&nbsp;&nbsp;{item.buyCount}人已购买</BookletLeftItemRightTop>
                                            </BookletLeftItemRight>
                                    </BookletLeftItem>
                                    )
                               })
                           }
                       </BookletLeft>
                       <BookletRight>
                            <BookletRightItem className='one'>掘金小册是什么？
                            一个小篇幅、高浓度、成体系、有收益的技术学习平台</BookletRightItem>
                            <BookletRightItem className='two'>
                                关注公众号 领取优惠码
                                <img src='https://b-gold-cdn.xitu.io/v3/static/img/wechat-qr.f1926e7.png' style={{'marginTop':'10px','width':'100%','height':"95px"}}/>
                            </BookletRightItem>
                            <BookletRightItem className='three'>
                                <BookletRightBottom><i className="iconfont" >&#xe604;</i>成为作者</BookletRightBottom>
                                <BookletRightBottom><i className="iconfont" >&#xe619;</i>建议反馈</BookletRightBottom>
                            </BookletRightItem>
                            
                       </BookletRight>
                   </BookletCon>
                </HomeCon>
                
            </div>
            </React.Fragment>
        )
    }
    componentDidMount(){
        this.props.showTopicList();
    }
}
const mapStateToProps=(state)=>{
    return{
        homeheader:state.get('home').get('homeheader'),
        sortleft:state.get('home').get('sortleft'),
        sortright:state.get('home').get('sortright'),
        
        topic:state.get('home').get('topic'),
        list:state.get('home').get('list'),
        user:state.get('home').get('user')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        showTopicList(){
            dispatch(actionCreators.homeheader())
            dispatch(actionCreators.sortleft())
            
            dispatch(actionCreators.showtopiclist())
            //dispatch(actionCreators.showlist())
            dispatch(actionCreators.getshowlist('1'))
            dispatch(actionCreators.showuserlist())
        },
        clickChangeList(id){
            dispatch(actionCreators.getshowlist(id))
        }
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Booklet)
