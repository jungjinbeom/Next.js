import {callApi} from "../src/api";
import {useRouter } from "next/router";

// getInitialProps 페이지 컴포넌트에 속성값 전달
Page2.getInitialProps=async ({query})=>{
    throw new Error("exception in getInitialProps");
    const text = query.text ||'none';
    const data = await callApi;
    return {text,data}
}

export default function Page2({text,data}){
    const router = useRouter()
    return <div>
        <button onClick={()=>router.push('/page1')}>page1</button>
        <p>this is home page2</p>
        <p>{`text: ${text}`}</p>
        <p>{`data is ${data}`}</p>
    </div>
}