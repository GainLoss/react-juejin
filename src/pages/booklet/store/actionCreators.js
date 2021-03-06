import * as constants from './constants'
import axios from 'axios'
var url=window.sessionStorage.getItem('key');
export const homeheader=(data)=>({
    type:constants.HOME_HEADER,
    data:[
        {id:'1',val:'全部',},
        {id:'2',val:'前端',},
        {id:'3',val:'后端',},
        {id:'4',val:'移动开发',},
        {id:'5',val:'区块链',},
        {id:'6',val:'通用',},
    ]
}) 
export const sortleft=(data)=>({
    type:constants.SORT_LEFT,
    data:[
        {id:'1',val:'热门',},
        {id:'2',val:'最新',},
        {id:'3',val:'评论',},
        {id:'4',val:'本周最热',},
        {id:'5',val:'本月最热',},
        {id:'6',val:'历史最热',},
    ]
}) 
 
export const showtopiclist=(data)=>({
    type:constants.SHOW_TOPIC_LIST,
    data:[
        {id:'1',val:'简书电影',pic:'//upload.jianshu.io/collections/images/21/20120316041115481.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'2',val:'故事',pic:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'3',val:'读书',pic:'//upload.jianshu.io/collections/images/4/sy_20091020135145113016.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'4',val:'手绘',pic:'//upload.jianshu.io/collections/images/283250/%E6%BC%AB%E7%94%BB%E4%B8%93%E9%A2%98.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'5',val:'旅行●在路上',pic:'//upload.jianshu.io/collections/images/13/%E5%95%8A.png?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'6',val:'@IT●互联网',pic:'//upload.jianshu.io/collections/images/14/6249340_194140034135_2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
        {id:'7',val:'摄影',pic:'//upload.jianshu.io/collections/images/83/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'},
    ]
})
//显示列表
export const showlist=(data)=>({
    type:constants.SHOW_LIST,
    data:data
})
export const getshowlist=(id)=>{
    return (dispatch) => {
        axios.get(url+'/api/booklet/booklet_list.json').then((response)=>{
            var data=eval('(' + response.data + ')').d;
            dispatch(showlist(data))
        })
    }
}
export const showuserlist=(data)=>({
    type:constants.SHOW_USER_LIST,
    data:[
        {id:'1',val:'Javascript',pic:'//upload.jianshu.io/users/upload_avatars/8781442/79bf6acc-5dd3-49d1-9e2b-6c58066c1442.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'2',val:'css',pic:'//upload.jianshu.io/users/upload_avatars/8972166/bd7164e9-2272-4ecf-91d0-f4903a150d4f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'3',val:'Vue',pic:'//upload.jianshu.io/users/upload_avatars/1835526/9bc600ce-7672-42b8-b03b-1a779593dd45.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'4',val:'Ahgular',pic:'//upload.jianshu.io/users/upload_avatars/6305091/b1912e7b-20d1-41a6-94f3-5a0d1c81fc5a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
        {id:'5',val:'React',pic:'//upload.jianshu.io/users/upload_avatars/3343569/3cd46650-54bc-4383-989f-80aacb0c42fe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',text:30000,like:400},
    ]
})
