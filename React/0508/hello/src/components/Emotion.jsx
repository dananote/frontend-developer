const items = [
    { id: 1, emotion: "기분이: 좋아요!😌" },
    { id: 2, emotion: "기분이: 정말 좋아요!😀" },
    { id: 3, emotion: "기분이: 최고에요!😆" },
    { id: 3, emotion: "기분이: 미쳤어요!🤩" },
]

console.log(items[0].emotion)
function Emotion() {
    let item = items.map(el => {
        return(
        <button>{el.emotion}</button>
        )
    })
}

export default Emotion