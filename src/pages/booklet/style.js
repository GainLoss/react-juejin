import styled from 'styled-components'

export const HomeCon=styled.div`
` 
//header
export const HomeHeader=styled.div`
    width:100%;
    border-bottom:1px solid #efefef;
    background-color:#fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    &.homeHeader{
        width:100%;
        max-width:960px;
        min-width:870px;
        margin:0 auto;
        height:45px;
        line-height:45px;
        border-bottom:none;
        
    }
    &.homeCon{
        width:80%;
        margin:0 auto;
        height:100%;
        overflow:auto;
    }
` 
export const HomeHeaderItem=styled.div`
    float:left;
    padding:0px 10px;
    color:#71777c;
    font-size:13px;
    cursor:pointer;
` 
//Con
export const BookletCon=styled.div`
    max-width:960px;  
    min-width:870px; 
    width:100%;
    margin:10px auto;
    overflow:hidden
` 
//Left
export const BookletLeft=styled.div`
    width:75%;
    float:left;
    background:#fff;
` 
export const BookletLeftItem=styled.div`
    width:100%;
    height:191px;
    border:1px solid #efefef;
    padding:20px;
    box-sizing:border-box
` 
export const BookletLeftItemLeft=styled.div`
    width:121px;
    height:149px;
    float:left;
    background-color:#fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
` 
export const BookletLeftItemRight=styled.div`
    width:calc(100% - 170px);
    float:left;
    height:191px;
    padding-left:20px
` 
export const BookletLeftItemRightTop=styled.div`
    width:100%;
    margin:5px 0px;
` 
//Right
export const BookletRight=styled.div`
    width:18%;
    float:left;
    margin-left:4%;
    font-size:14px;
` 
export const BookletRightItem=styled.div`
    width:100%;
    padding:10px;
    border:1px solid #efefef;
    margin-bottom:10px;
    &.one{
        background-color:#fff;
        box-shadow: 0 1px 2px 0 rgba(239,239,239,.08);
    }
    &.two{
        height:125px; 
        background-color:#fff;
        box-shadow: 0 1px 2px 0 rgba(239,239,239,.08); 
    }
    &.three{
        height:55px;  
        background-color:#fff;
        box-shadow: 0 1px 2px 0 rgba(239,239,239,.08);

    }

` 
export const BookletRightBottom=styled.div`
    width:50%;
    float:left;
    text-align:center;
    i {
        width:100%;
        display:block;
        font-size:30px;
        color:#007fff
    }
` 

