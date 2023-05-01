const container = document.querySelector('#root');


//* 환경변수
// 환경변수를 저장하는 변수는 관례적으로 전부다 대문자로 함
const NEWSLIST_URL = 'https://api.hnpwa.com/v0/news/1.json';
const CONTACT_URL = 'https://api.hnpwa.com/v0/item/#id.json';

//* api 데이터 받아오는 함수
async function getData(url) {
    try{
        const response = await fetch(url); // url 데이터 넣어주기
        if(!response.ok){
            throw new Error('네트워크에 문제가 있습니다.') // 에러 던지기
        }
        return response.json(); // pasing
    } catch(error) {
        console.log(error)
    }
}

async function newsFeed() {
    const newsFeed = await getData(NEWSLIST_URL)
    const newsList = [];
;
    for (let i = 0; i < 10; i++) {
        newsList.push (`
            <li>
                <a href="#/detail">${newsFeed[i].id}(${newsFeed[i].comments_count})</a>
            </li>
            `)
    }
    newsList.push('<ul>')
    container.innerHTML = newsList.join('');

}

newsFeed()

