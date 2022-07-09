import styled from "styled-components"

export const Worksection = styled.div`
height: auto;
padding: 50px 0;
overflow: hidden;
background: #fff
`
export const Worktitle = styled.h2`
font-size: 60px;
text-align:center;
`
export const Titlespan = styled.span`
font-weight: normal
`
export const Workpart = styled.div`

    margin-top: 20px;
    width: 30%;
    float: left;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: 5%;
       @media(max-width: 575px){
        width: 100%;
        float: none;
        margin-left: 0;

    }
    @media(min-width: 576px) and(max-width: 768px){
        width: 47%;
    }

`
export const face = styled.div`
margin-left:0;
`
export const partstyle = styled.div`
margin-left: 5%;
`
export const Particon = styled.i`
color: #888;
margin-bottom: 20px
`
export const Parttitle = styled.h4`
font-size: 25px;
color: #eb5424;
margin-bottom: 20px
`
export const Partline = styled.hr`
width: 60 %;
margin: auto;
margin-bottom: 20px
`
export const Partdesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px
`

